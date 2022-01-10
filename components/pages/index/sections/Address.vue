<template>
  <section id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading">
      {{ $t("heading.contact") }}
    </h2>
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
