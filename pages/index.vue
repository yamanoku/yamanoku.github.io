<template>
  <div>
    <header-component />
    <main>
      <h2>Okuto Oyama a.k.a. Oyama Michinoku, yamanoku.</h2>
      <h3>FrontEnd Designer, UI Design Proposer, Writter, Document Translater, Internet Watcher</h3>
      <h3>Basic Info</h3>
      <basic-info-component />
      <h3>Product List</h3>
      <product-list-component />
      <h3>SNS</h3>
      <sns-component />
      <h3>Contact</h3>
      <address-component />
    </main>
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import BasicInfoComponent from '~/components/BasicInfo.vue'
import ProductListComponent from '~/components/ProductList.vue'
import SnsComponent from '~/components/Sns.vue'
import AddressComponent from '~/components/Address.vue'

export default {
  components: {
    HeaderComponent,
    BasicInfoComponent,
    ProductListComponent,
    SnsComponent,
    AddressComponent
  }
}
</script>

<style>
main {
  max-width: 980px;
  margin: auto;
  padding: 0 10px 20px;
}
</style>
