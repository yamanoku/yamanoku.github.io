<script setup lang="ts">
import { ref } from 'vue'

const pressed = ref(false)

const toggle = () => {
  pressed.value = !pressed.value
}
</script>

<template>
  <button
    type="button"
    class="neu-card"
    :class="{ 'neu-card--pressed': pressed }"
    @click="toggle"
  >
    <span class="neu-card__content">
      ニューモフィズムボタン
    </span>
  </button>
</template>

<style scoped>
.neu-card {
  --neu-bg: #e0e5ec;
  --neu-shadow-light: #ffffff;
  --neu-shadow-dark: #a3b1c6;
  --neu-radius: 20px;
  
  background: var(--neu-bg);
  border-radius: var(--neu-radius);
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  /* ニューモフィズムの核心：凸型の影 */
  box-shadow:
    8px 8px 16px var(--neu-shadow-dark),
    -8px -8px 16px var(--neu-shadow-light);
}

button:not(.neu-card--pressed):hover {
  box-shadow:
    10px 10px 20px var(--neu-shadow-dark),
    -10px -10px 20px var(--neu-shadow-light);
}

/* 押下状態：凹型の影（インセット） */
.neu-card--pressed {
  box-shadow:
    inset 6px 6px 12px var(--neu-shadow-dark),
    inset -6px -6px 12px var(--neu-shadow-light);
}

.neu-card__title {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a5568;
}

.neu-card__content {
  color: #718096;
  line-height: 1.6;
}
</style>