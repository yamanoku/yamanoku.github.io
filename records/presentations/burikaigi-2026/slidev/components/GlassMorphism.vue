<script setup lang="ts">
</script>

<template>
  <button
    type="button"
    class="glass-card glass-card--blur-heavy"
  >
    <div class="glass-card__content">
      グラスモーフィズムボタン
    </div>
  </button>
</template>

<style scoped>
.glass-card {
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-shadow: rgba(0, 0, 0, 0.1);
  --glass-radius: 16px;
  
  background: var(--glass-bg);
  border-radius: var(--glass-radius);
  padding: 24px;
  width: 100%;
  text-align: center;
  
  /* グラスモーフィズムの核心：半透明ボーダー */
  border: 1px solid var(--glass-border);
  
  /* 奥行き感のある影 */
  box-shadow:
    0 8px 32px var(--glass-shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  
  transition: all 0.3s ease;
}

/* ブラー強度のバリエーション */
.glass-card--blur-light {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.glass-card--blur-medium {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.glass-card--blur-heavy {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.glass-card__title {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.glass-card__content {
  color: white;
  line-height: 1.6;
}
</style>