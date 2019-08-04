<template>
  <header>
    <h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="246"
        height="242"
        viewBox="0 0 246 242"
        role="img"
        aria-labelledby="title"
      >
        <title id="title">yamanoku</title>
        <path
          class="cls-1"
          d="M64,67v54l82,82-46,46v60h56L310,155V96H230l-21,20L160,67H64ZM176,203l-45,46h25L293,113H230l-39,39-31-31H94Z"
          transform="translate(-64 -67)"
        ></path>
      </svg>
    </h1>
  </header>
</template>

<style scoped>
header {
  background-color: #36465d;
}
@media (prefers-color-scheme: dark) {
  header {
    background-color: #000;
  }
}
h1 {
  text-align: center;
  margin: 0;
  padding: var(--rhythm) 0;
}
svg {
  width: 150px;
  height: 150px;
  vertical-align: bottom;
}
.cls-1 {
  fill: #fff;
  fill-rule: evenodd;
}
</style>
