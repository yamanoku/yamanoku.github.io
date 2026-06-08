<script setup lang="ts">
import { useId } from 'vue';
const id = useId();
defineProps<{ tooltip: string }>();
</script>

<template>
  <button type="button" :style="{ 'anchor-name': `--anchor-btn-${id}`}" :popovertarget="`my-tooltip-${id}`"><slot /></button>
  <div :id="`my-tooltip-${id}`" class="tooltip" :style="{ 'position-anchor': `--anchor-btn-${id}` }" popover>{{ tooltip }}</div>
</template>

<style scoped>
button {
  padding: 8px 12px;
  background-color: #e0e0e0;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.tooltip {  
  /*  POSITIONING  */
  position-area: bottom;
  margin: 0;
  margin-top: 0.5rem;
  max-width: 300px;
  
  /*  etc  */
  background: rgb(48, 48, 48);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  overflow: visible;
  border-radius: 1rem;
}

.tooltip::before {
  content: '';
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-bottom-color: rgb(48, 48, 48);
  border-width: 8px;
  margin-left: -8px;  
}
</style>