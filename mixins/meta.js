export default {
  asyncData(context) {
    return {
      baseName: context.env.baseName,
      baseDesc: context.env.baseDesc,
      baseUrl: context.env.baseUrl,
      baseOgp: context.env.baseOgp,
      baseOgpAlt: context.env.baseName
    };
  },
  head() {
    const head = {
      meta: [],
      bodyAttrs: {}
    };
    if (this.meta.title) {
      const title = `${this.meta.title}`;
      head.title = title;
      head.meta.push({ hid: "og:title", property: "og:title", content: title });
    }
    if (this.meta.description) {
      head.meta.push({
        hid: "description",
        name: "description",
        content: this.meta.description
      });
      head.meta.push({
        hid: "og:description",
        property: "og:description",
        content: this.meta.description
      });
    } else if (!this.meta.description && this.meta.title) {
      head.meta.push({
        hid: "description",
        name: "description",
        content: this.baseDesc
      });
      head.meta.push({
        hid: "og:description",
        property: "og:description",
        content: this.baseDesc
      });
    }
    if (this.meta.type) {
      head.meta.push({
        hid: "og:type",
        property: "og:type",
        content: this.meta.type
      });
    } else if (this.$route.path === "/") {
      head.meta.push({
        hid: "og:type",
        property: "og:type",
        content: "website"
      });
    }
    if (this.meta.image) {
      head.meta.push({
        hid: "og:image",
        property: "og:image",
        content: this.meta.image
      });
      head.meta.push({
        hid: "og:image:alt",
        property: "og:image:alt",
        content: this.meta.imageAlt
      });
      head.meta.push({
        hid: "twitter:image:alt",
        property: "twitter:image:alt",
        content: this.meta.imageAlt
      });
    }
    return head;
  }
};
