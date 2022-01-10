<template>
  <section id="product" aria-labelledby="product_heading">
    <global-heading-component
      id="product_heading"
      :heading-level="2"
      :heading-text="$t('heading.productList')"
    />
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
