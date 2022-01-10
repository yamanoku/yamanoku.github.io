<template>
  <section id="contact" aria-labelledby="contact-heading">
    <global-heading-component
      id="contact-heading"
      :heading-level="2"
      :heading-text="$t('heading.contact')"
    />
    <address>
      <a href="mailto:0910yama@gmail.com">
        0910yama@gmail.com
        <mail-icon />
      </a>
    </address>
  </section>
</template>

<script>
export default {
  name: "IndexSectionsAddress"
};
</script>
