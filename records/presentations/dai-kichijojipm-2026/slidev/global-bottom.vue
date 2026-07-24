<script setup lang="ts">
import { configs, useNav } from "@slidev/client";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const STORAGE_KEY = "dai-kichijojipm-2026:countdown";

// headmatter の `duration`（例 "15min" / "15"）を分数としてパースする。
// 取得できない場合は 15 分にフォールバック。
function parseDurationMinutes(raw: unknown): number {
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string") {
    const matched = raw.match(/[\d.]+/);
    if (matched) {
      const value = Number.parseFloat(matched[0]);
      if (Number.isFinite(value) && value > 0) return value;
    }
  }
  return 15;
}

// `duration` は SlidevConfig にない独自 headmatter フィールドなので、
// unknown 経由で取り出してからパースする。
const { duration } = configs as unknown as { duration?: string | number };
const totalMs = parseDurationMinutes(duration) * 60 * 1000;

type TimerState = {
  // 一時停止のたびに確定される、累積の経過ミリ秒
  elapsedMs: number;
  running: boolean;
  // 現在の計測区間の開始時刻（epoch ms）。停止中は null。
  lastResumeEpoch: number | null;
};

function loadState(): TimerState {
  const fallback: TimerState = {
    elapsedMs: 0,
    running: false,
    lastResumeEpoch: null,
  };
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<TimerState>;
    return {
      elapsedMs:
        typeof parsed.elapsedMs === "number" ? parsed.elapsedMs : 0,
      running: parsed.running === true,
      lastResumeEpoch:
        typeof parsed.lastResumeEpoch === "number"
          ? parsed.lastResumeEpoch
          : null,
    };
  } catch {
    return fallback;
  }
}

const state = ref<TimerState>(loadState());
// 表示更新を駆動する現在時刻。running 中のみ interval で更新する。
const now = ref(Date.now());
let intervalId: ReturnType<typeof setInterval> | null = null;

function startTicking() {
  if (intervalId != null) return;
  now.value = Date.now();
  intervalId = setInterval(() => {
    now.value = Date.now();
  }, 250);
}

function stopTicking() {
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// state の変化を localStorage に永続化。
watch(
  state,
  (value) => {
    if (typeof localStorage === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // 保存に失敗しても表示は継続する
    }
  },
  { deep: true },
);

onMounted(() => {
  // リロード直後に running 状態なら計測を再開する。
  if (state.value.running) startTicking();
});

onUnmounted(() => {
  stopTicking();
});

const accumulatedMs = computed(() => {
  const base = state.value.elapsedMs;
  if (state.value.running && state.value.lastResumeEpoch != null) {
    return base + Math.max(0, now.value - state.value.lastResumeEpoch);
  }
  return base;
});

const remainingMs = computed(() => Math.max(0, totalMs - accumulatedMs.value));

const isOvertime = computed(() => totalMs - accumulatedMs.value <= 0);

const display = computed(() => {
  const totalSeconds = Math.ceil(remainingMs.value / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(minutes)}:${pad(seconds)}`;
});

function start() {
  if (state.value.running) return;
  state.value.running = true;
  state.value.lastResumeEpoch = Date.now();
  startTicking();
}

function pauseTimer() {
  if (!state.value.running) return;
  // これまでの経過を確定して計測を止める。
  if (state.value.lastResumeEpoch !== null) {
    state.value.elapsedMs += Math.max(
      0,
      Date.now() - state.value.lastResumeEpoch,
    );
  }
  state.value.running = false;
  state.value.lastResumeEpoch = null;
  stopTicking();
}

function toggle() {
  if (state.value.running) pauseTimer();
  else start();
}

// スライドが動いたら自動でカウントダウンを開始する。
// 未計測（初期状態）のときだけ開始し、手動で一時停止した後は自動再開しない。
const { currentSlideNo } = useNav();
watch(currentSlideNo, () => {
  if (!state.value.running && state.value.elapsedMs === 0) start();
});

function reset() {
  stopTicking();
  state.value.elapsedMs = 0;
  state.value.running = false;
  state.value.lastResumeEpoch = null;
  now.value = Date.now();
}
</script>

<template>
  <div class="countdown" :class="{ 'is-overtime': isOvertime }">
    <time class="countdown__time" aria-live="off">{{ display }}</time>
    <div class="countdown__actions">
      <button
        type="button"
        class="countdown__btn"
        :aria-label="state.running ? '一時停止' : '開始'"
        @click="toggle"
      >
        {{ state.running ? "⏸" : "▶" }}
      </button>
      <button
        type="button"
        class="countdown__btn"
        aria-label="リセット"
        @click="reset"
      >
        ⟲
      </button>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  position: fixed;
  right: 0.75rem;
  top: 0.75rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.6rem;
  border-radius: 0.6rem;
  background-color: rgba(255, 255, 255, 0.82);
  color: rgba(21, 32, 43, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(4px);
  font-variant-numeric: tabular-nums;
  user-select: none;
}

:global(html.dark) .countdown {
  background-color: rgba(21, 32, 43, 0.82);
  color: rgba(230, 230, 230, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.countdown__time {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  font-feature-settings: "tnum";
}

.countdown.is-overtime .countdown__time {
  color: rgba(220, 40, 40, 1);
}

.countdown__actions {
  display: flex;
  gap: 0.25rem;
}

.countdown__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  padding: 0;
  border: none;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.08);
  color: inherit;
  font-size: 0.85rem;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.countdown__btn:hover {
  background-color: rgba(0, 0, 0, 0.16);
}

.countdown__btn:focus-visible {
  outline: 2px solid rgba(18, 122, 200, 1);
  outline-offset: 2px;
}

:global(html.dark) .countdown__btn {
  background-color: rgba(255, 255, 255, 0.14);
}

:global(html.dark) .countdown__btn:hover {
  background-color: rgba(255, 255, 255, 0.24);
}
</style>
