<template>
  <ul>
    <li>{{ $t("info.birth") }}</li>
    <li>{{ $t("info.sex") }}</li>
    <li>
      {{ $t("info.2008") }}
      <ul>
        <li>
          {{ $t("info.bfa") }}
          <ul>
            <li>{{ $t("info.bfa01") }}</li>
            <li>{{ $t("info.bfa02") }}</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>{{ $t("info.2014") }}</li>
    <li>
      {{ $t("info.2016") }}
      <ul>
        <li>
          <span role="img" aria-label="Family With Girl">👨‍👩‍👧</span> &amp;
          <span role="img" aria-label="cat">🐈</span>
          <span role="img" aria-label="cat">🐈</span>
          <span role="img" aria-label="cat">🐈</span>
        </li>
      </ul>
    </li>
    <li>{{ $t("info.live") }}</li>
  </ul>
</template>
