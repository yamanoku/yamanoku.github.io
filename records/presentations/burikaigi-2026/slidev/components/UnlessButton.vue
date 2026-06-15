<template>
  <div class="useless-button-container">
    <!-- 背景のパーティクル -->
    <!-- <div class="particles">
      <span v-for="i in 50" :key="i" class="particle" :style="particleStyle(i)"></span>
    </div> -->

    <!-- 光の輪 -->
    <!-- <div class="light-rings">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
    </div> -->

    <!-- メインのdiv「ボタン」 -->
    <div 
      class="the-button"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- 虹色のボーダー -->
      <div class="rainbow-border"></div>
      
      <!-- グロー効果 -->
      <div class="glow-effect"></div>
      
      <!-- ボタンの本体 -->
      <div class="button-body">
        <!-- キラキラエフェクト -->
        <div class="sparkles">
          <span v-for="i in 20" :key="i" class="sparkle" :style="sparkleStyle(i)">✨</span>
        </div>
        
        <!-- テキスト -->
        <div class="button-text">
          <span class="text-main">🎉 これはボタンです！ 🎉</span>
          <span class="text-sub">✨ CLICK ME ✨</span>
          <span class="text-urgent">⚡ 今すぐ押して！ ⚡</span>
        </div>

        <!-- 矢印アニメーション -->
        <div class="arrows">
          <span class="arrow arrow-left">👉</span>
          <span class="arrow arrow-right">👈</span>
        </div>
      </div>

    </div>

    <!-- ホバー時の追加エフェクト -->
    <Transition name="hover-effect">
      <div v-if="isHovering" class="hover-explosion">
        <span v-for="i in 30" :key="i" class="explosion-particle" :style="explosionStyle(i)">
          {{ ['🎊', '🎉', '✨', '💫', '⭐', '🌟'][i % 6] }}
        </span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHovering = ref(false)

const particleStyle = (i) => ({
  '--delay': `${Math.random() * 5}s`,
  '--duration': `${3 + Math.random() * 4}s`,
  '--x': `${Math.random() * 100}%`,
  '--size': `${2 + Math.random() * 6}px`,
  '--hue': `${(i * 7.2) % 360}`,
})

const sparkleStyle = (i) => ({
  '--delay': `${Math.random() * 2}s`,
  '--x': `${Math.random() * 100}%`,
  '--y': `${Math.random() * 100}%`,
})

const explosionStyle = (i) => ({
  '--angle': `${(i * 12)}deg`,
  '--distance': `${50 + Math.random() * 100}px`,
  '--delay': `${Math.random() * 0.3}s`,
})
</script>

<style scoped>
.useless-button-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
}

/* パーティクル背景 */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  bottom: -10px;
  left: var(--x);
  width: var(--size);
  height: var(--size);
  background: hsl(var(--hue), 100%, 70%);
  border-radius: 50%;
  animation: float-up var(--duration) var(--delay) infinite linear;
  box-shadow: 0 0 10px hsl(var(--hue), 100%, 70%);
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-500px) rotate(720deg);
    opacity: 0;
  }
}

/* 光の輪 */
.light-rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.ring {
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
}

.ring-1 {
  width: 200px;
  height: 200px;
  border-color: rgba(255, 0, 128, 0.5);
  animation-delay: 0s;
}

.ring-2 {
  width: 250px;
  height: 250px;
  border-color: rgba(0, 255, 255, 0.5);
  animation-delay: 0.5s;
}

.ring-3 {
  width: 300px;
  height: 300px;
  border-color: rgba(255, 255, 0, 0.5);
  animation-delay: 1s;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* メインのボタン（div） */
.the-button {
  position: relative;
  padding: 40px 80px;
  transform-style: preserve-3d;
  /* animation: mega-bounce 1s ease-in-out infinite, shake 0.1s linear infinite; */
}

@keyframes mega-bounce {
  0%, 100% {
    transform: scale(1) rotate(-2deg);
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

/* 虹色のボーダー */
.rainbow-border {
  position: absolute;
  inset: -5px;
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000
  );
  background-size: 400% 100%;
  animation: rainbow-flow 16s linear infinite;
  z-index: -2;
}

@keyframes rainbow-flow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 400% 50%;
  }
}

/* グロー効果 */
.glow-effect {
  position: absolute;
  inset: 0;
  border-radius: 25px;
  box-shadow: 
    0 0 20px #ff00ff,
    0 0 40px #00ffff,
    0 0 60px #ffff00,
    0 0 80px #ff00ff,
    inset 0 0 20px rgba(255, 255, 255, 0.3);
  animation: glow-pulse 1.5s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes glow-pulse {
  0% {
    box-shadow: 
      0 0 20px #ff00ff,
      0 0 40px #00ffff,
      0 0 60px #ffff00,
      0 0 80px #ff00ff,
      inset 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 40px #00ffff,
      0 0 80px #ff00ff,
      0 0 120px #ffff00,
      0 0 160px #00ffff,
      inset 0 0 40px rgba(255, 255, 255, 0.5);
  }
}

/* ボタン本体 */
.button-body {
  position: relative;
  padding: 30px 60px;
  background: linear-gradient(
    145deg,
    #ff6b6b 0%,
    #feca57 20%,
    #48dbfb 40%,
    #ff9ff3 60%,
    #54a0ff 80%,
    #5f27cd 100%
  );
  background-size: 300% 300%;
  border-radius: 20px;
  border: 5px solid gold;
  animation: gradient-shift 3s ease infinite;
  overflow: hidden;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* キラキラ */
.sparkles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  left: var(--x);
  top: var(--y);
  font-size: 20px;
  animation: sparkle-dance 1s var(--delay) ease-in-out infinite;
}

@keyframes sparkle-dance {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    opacity: 0.5;
  }
}

/* テキスト */
.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.text-main {
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-shadow: 
    3px 3px 0 #ff0000,
    -3px -3px 0 #00ff00,
    3px -3px 0 #0000ff,
    -3px 3px 0 #ffff00,
    0 0 20px rgba(255, 255, 255, 0.8);
  animation: text-rainbow 0.5s linear infinite, text-scale 0.3s ease-in-out infinite alternate;
}

@keyframes text-rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

@keyframes text-scale {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

.text-sub {
  font-size: 24px;
  color: #fff700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: blink-fast 0.3s step-end infinite;
}

@keyframes blink-fast {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.text-urgent {
  font-size: 18px;
  color: #ff3333;
  font-weight: bold;
  animation: urgent-pulse 0.2s ease-in-out infinite alternate;
}

@keyframes urgent-pulse {
  0% { 
    transform: scale(1);
    color: #ff3333;
  }
  100% { 
    transform: scale(1.2);
    color: #ffff00;
  }
}

/* 矢印 */
.arrows {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 -30px;
  pointer-events: none;
}

.arrow {
  font-size: 40px;
  animation: arrow-bounce 0.5s ease-in-out infinite alternate;
}

.arrow-left {
  animation-delay: 0s;
}

.arrow-right {
  animation-delay: 0.25s;
}

@keyframes arrow-bounce {
  0% { transform: translateX(-10px); }
  100% { transform: translateX(10px); }
}

/* コーナーの星 */
.corner {
  position: absolute;
  font-size: 30px;
  animation: corner-spin 1s linear infinite;
}

.corner-tl { top: -15px; left: -15px; }
.corner-tr { top: -15px; right: -15px; animation-direction: reverse; }
.corner-bl { bottom: -15px; left: -15px; animation-direction: reverse; }
.corner-br { bottom: -15px; right: -15px; }

@keyframes corner-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.5); }
  100% { transform: rotate(360deg) scale(1); }
}

/* 吹き出し */
.speech-bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  padding: 8px 16px;
  background: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: bubble-float 2s ease-in-out infinite;
}

.bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: white;
}

.bubble-1 {
  top: -50px;
  left: 20%;
  animation-delay: 0s;
}

.bubble-2 {
  top: -60px;
  right: 10%;
  animation-delay: 0.5s;
}

.bubble-3 {
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 1s;
}

@keyframes bubble-float {
  0%, 100% { 
    transform: translateY(0);
    opacity: 1;
  }
  50% { 
    transform: translateY(-10px);
    opacity: 0.7;
  }
}

/* 注意書き */
.disclaimer {
  margin-top: 40px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
}

/* ホバー時の爆発エフェクト */
.hover-explosion {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.explosion-particle {
  position: absolute;
  font-size: 30px;
  animation: explode 1s var(--delay) ease-out infinite;
}

@keyframes explode {
  0% {
    transform: rotate(var(--angle)) translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(var(--angle)) translateX(var(--distance)) scale(0);
    opacity: 0;
  }
}

.hover-effect-enter-active,
.hover-effect-leave-active {
  transition: opacity 0.3s ease;
}

.hover-effect-enter-from,
.hover-effect-leave-to {
  opacity: 0;
}

/* 天の声 */
.divine-message {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: divine-float 3s ease-in-out infinite;
}

.message-text {
  font-family: 'Times New Roman', serif;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.3);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: divine-pulse 2s ease-in-out infinite alternate;
}

@keyframes divine-float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes divine-pulse {
  0% { opacity: 0.2; }
  100% { opacity: 0.6; }
}

@keyframes mega-shake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-5px, 5px) rotate(-5deg); }
  50% { transform: translate(5px, -5px) rotate(5deg); }
  75% { transform: translate(-5px, -5px) rotate(-5deg); }
}
</style>