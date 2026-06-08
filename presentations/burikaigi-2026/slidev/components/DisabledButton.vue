<template>
  <div class="grid auto-cols-max grid-flow-col gap-4">
    <button type="submit">送信する</button>
    <button type="submit" disabled>送信する</button>
  </div>
</template>

<style scoped>
button {
  padding: 10px 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 300px;
}
button:disabled {
  background-color: #ccc;
  color: black;
  cursor: not-allowed;
}
</style>