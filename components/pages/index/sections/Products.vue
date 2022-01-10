<template>
  <section id="product" aria-labelledby="product_heading">
    <h2 id="product_heading">
      {{ $t("heading.productList") }}
    </h2>
    <index-sections-products-vuejs-accessibility-2019 />
    <index-sections-products-accessibility-beginner />
    <index-sections-products-oclock-app />
    <index-sections-products-reading />
    <index-sections-products-vue-portfolio />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsProducts"
};
</script>
