<template>
  <div>
    <ul v-for="list in lists" :key="list.iid">
      <li v-if="list.attachments[0].title">
        <a :href="list.attachments[0].title_link" target="_blank" rel="noopener">{{ list.attachments[0].title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  const TOKEN = `https://slack.com/api/search.messages?token=xoxp-18667244102-18667244118-343992227158-616a1820b40ced4b2a8b01d5fa808592&query=Reading...&pretty=1`;
  export default {
    data() {
      return {
        lists: []
      }
    },
    created() {
      axios.get(TOKEN)
        .then((res) => {
          this.lists = res.data.messages.matches;
        });
    }
  }
</script>