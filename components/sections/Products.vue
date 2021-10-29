<template>
  <section id="product" aria-labelledby="product_heading">
    <h2 id="product_heading">
      {{ $t("heading.productList") }}
    </h2>
    <products-vuejs-accessibility-page />
    <products-accessibility-beginner />
    <products-oclock-app />
    <products-reading />
    <products-vue-portfolio />
  </section>
</template>

<script>
export default {
  name: "SectionsProducts"
};
</script>
