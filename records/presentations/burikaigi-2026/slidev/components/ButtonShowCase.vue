<script setup lang="ts">
import { ref } from "vue";

// トグルボタンの状態
const isMuted = ref(false);

// ラジオボタングループの状態
const selectedSize = ref("medium");
const sizes = [
  { value: "small", label: "小" },
  { value: "medium", label: "中" },
  { value: "large", label: "大" },
];

// 開閉ボタンの状態
const isExpanded = ref(false);

// ステップナビゲーションの状態
const currentStep = ref(1);
const totalSteps = 3;

// イベントハンドラ
const handleSubmit = () => {
  console.log("送信しました");
};

const handleSearch = () => {
  console.log("検索を実行");
};

const handleConfirm = () => {
  console.log("決定しました");
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
};

const selectSize = (value: string) => {
  selectedSize.value = value;
};

const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const goNext = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++;
  }
};
</script>

<template>
  <!-- 送信ボタン -->
  <div>
    <button type="submit" class="btn btn-primary" @click="handleSubmit">
      送信
    </button>
  </div>

  <!-- 検索ボタン -->
  <div class="search-group">
    <label for="search-input" class="visually-hidden">検索キーワード</label>
    <input
      id="search-input"
      type="search"
      placeholder="キーワードを入力"
      class="search-input"
    />
    <button type="button" class="btn btn-search" @click="handleSearch">
      <span class="icon" aria-hidden="true">🔍</span>
      <span>検索</span>
    </button>
  </div>

  <!-- トグルボタン -->
  <div>
    <button
      type="button"
      class="btn btn-toggle"
      :class="{ 'is-pressed': isMuted }"
      :aria-pressed="isMuted"
      @click="toggleMute"
    >
      <span class="icon" aria-hidden="true">{{ isMuted ? "🔇" : "🔊" }}</span>
      <span>{{ isMuted ? "ミュート中" : "ミュート" }}</span>
    </button>
  </div>  

  <!-- ラジオボタン（ボタングループ） -->
  <div role="radiogroup" class="radio-group">
    <button
      v-for="size in sizes"
      :key="size.value"
      type="button"
      role="radio"
      class="btn btn-radio"
      :class="{ 'is-checked': selectedSize === size.value }"
      :aria-checked="selectedSize === size.value"
      @click="selectSize(size.value)"
    >
      {{ size.label }}
    </button>
  </div>

  <!-- 戻る・次へボタン -->
  <div class="nav-group">
    <button
      type="button"
      class="btn btn-nav"
      :disabled="currentStep <= 1"
      @click="goBack"
    >
      <span class="icon" aria-hidden="true">←</span>
      <span>戻る</span>
    </button>
    <button
      type="button"
      class="btn btn-nav btn-next"
      :disabled="currentStep >= totalSteps"
      @click="goNext"
    >
      <span>次へ</span>
      <span class="icon" aria-hidden="true">→</span>
    </button>
  </div>
</template>

<style scoped>
div + div {
  margin-top: 1lh;
}
  
/* 基本ボタンスタイル */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:focus-visible {
  outline: 3px solid #4a90d9;
  outline-offset: 2px;
}

/* 送信ボタン */
.btn-primary {
  background: #2563eb;
  color: white;
  width: 200px;
  justify-content: center;
}

/* 検索ボタン */
.search-group {
  display: flex;
  gap: 0.5rem;
}

.search-input {
  flex-basis: 240px;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 6px;
}

.search-input:focus {
  outline: none;
  border-color: #4a90d9;
}

.btn-search {
  background: #059669;
  color: white;
}

.btn-search:hover:not(:disabled) {
  background: #047857;
}

/* 決定ボタン */
.btn-confirm {
  background: #7c3aed;
  color: white;
}

.btn-confirm:hover:not(:disabled) {
  background: #6d28d9;
}

/* トグルボタン */
.btn-toggle {
  background: #e5e7eb;
  color: #374151;
  min-width: 140px;
}

.btn-toggle:hover:not(:disabled) {
  background: #d1d5db;
}

.btn-toggle.is-pressed {
  background: #fbbf24;
  color: #1f2937;
}

/* ラジオボタングループ */
.radio-group {
  display: flex;
  gap: 0.25rem;
}

.btn-radio {
  background: #e5e7eb;
  color: #374151;
  border-radius: 0;
}

.btn-radio:first-child {
  border-radius: 6px 0 0 6px;
}

.btn-radio:last-child {
  border-radius: 0 6px 6px 0;
}

.btn-radio:hover:not(:disabled) {
  background: #d1d5db;
}

.btn-radio.is-checked {
  background: #3b82f6;
  color: white;
}

.selection-info {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #666;
}

/* ナビゲーションボタン */
.nav-group {
  display: flex;
  gap: 1rem;
}

.btn-nav {
  background: #6b7280;
  color: white;
}

.btn-nav:hover:not(:disabled) {
  background: #4b5563;
}

.btn-next {
  background: #2563eb;
}

.btn-next:hover:not(:disabled) {
  background: #1d4ed8;
}

/* 開閉ボタン */
.btn-disclosure {
  background: transparent;
  color: #1f2937;
  padding: 0.5rem;
  border: none;
}

.btn-disclosure:hover {
  background: #e5e7eb;
}

.disclosure-icon {
  display: inline-block;
  transition: transform 0.2s ease;
}

.disclosure-icon.is-expanded {
  transform: rotate(90deg);
}

.disclosure-panel {
  margin-top: 0.75rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

.disclosure-panel[hidden] {
  display: none;
}

/* アクセシビリティ用の非表示クラス */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.icon {
  font-size: 1rem;
}
</style>
