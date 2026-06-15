<script setup lang="ts">
import { ref } from 'vue'

const isPressed = ref(false)

const toggle = () => {
  isPressed.value = !isPressed.value
}
</script>

<template>
  <div class="button-base">
    <button
      type="button"
      class="quiz-button"
      :class="{ pressed: isPressed }"
      :aria-pressed="isPressed"
      aria-label="早押しボタン"
      @click="toggle"
    >
      <span class="button-highlight"></span>
    </button>
  </div>
</template>

<style scoped>
.button-base {
  width: 160px;
  height: 160px;
  background: linear-gradient(
    to bottom,
    #4a4a4a 0%,
    #2a2a2a 50%,
    #1a1a1a 100%
  );
  border-radius: 50%;
  padding: 12px;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* ボタン本体 */
.quiz-button {
  --depth: 16px;
  
  position: relative;
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-block-start: -8px;
  
  /* 赤いボタンのグラデーション */
  background: 
    radial-gradient(
      ellipse 50% 30% at 50% 20%,
      rgba(255, 255, 255, 0.4) 0%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      #ff4444 0%,
      #cc0000 50%,
      #990000 100%
    );
  
  /* 立体的な影 */
  box-shadow:
    /* 側面の影（深さを表現） */
    0 var(--depth) 0 #660000,
    /* 底面の影 */
    0 calc(var(--depth) + 4px) 8px rgba(0, 0, 0, 0.5),
    /* 内側の縁取り */
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -4px 8px rgba(0, 0, 0, 0.3);
  
  transform: translateY(0);
  transition:
    transform 0.08s ease-out,
    box-shadow 0.08s ease-out,
    background 0.08s ease-out;
  
  user-select: none;
}

/* ハイライト（光沢） */
.button-highlight {
  position: absolute;
  top: 12%;
  left: 20%;
  width: 35%;
  height: 20%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.3) 40%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.08s ease-out;
}

.quiz-button:hover:not(.pressed) {
  background: 
    radial-gradient(
      ellipse 50% 30% at 50% 20%,
      rgba(255, 255, 255, 0.5) 0%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      #ff5555 0%,
      #dd1111 50%,
      #aa0000 100%
    );
}

.quiz-button:focus-visible {
  outline: 3px solid #ffaaaa;
  outline-offset: 4px;
}

/* 押し込まれた状態 */
.quiz-button.pressed {
  --depth: 4px;
  
  transform: translateY(12px);
  
  background: 
    radial-gradient(
      ellipse 50% 30% at 50% 25%,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      #cc0000 0%,
      #990000 50%,
      #770000 100%
    );
  
  box-shadow:
    0 var(--depth) 0 #550000,
    0 calc(var(--depth) + 2px) 4px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.4);
}

.quiz-button.pressed .button-highlight {
  opacity: 0.5;
}
</style>