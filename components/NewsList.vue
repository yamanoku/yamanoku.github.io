<template>
  <div>
    <paginate-links
      for="lists"
      :limit="2"
      :show-step-links="true"
      :async="true">
    </paginate-links>
    <paginate
      tag="ul"
      name="lists"
      :list="lists"
      :per="5">
      <li v-for="list in paginated('lists')" :key="list.iid" v-if="list.attachments[0].title">
        <a :href="list.attachments[0].title_link" target="_blank" rel="noopener">{{ list.attachments[0].title }}</a>
      </li>
    </paginate>
    <paginate-links
      for="lists"
      :limit="2"
      :show-step-links="true"
      :async="true">
    </paginate-links>
  </div>
</template>

<script>
  import axios from 'axios';
  const TOKEN = `https://slack.com/api/search.messages?token=xoxp-18667244102-18667244118-343992227158-616a1820b40ced4b2a8b01d5fa808592&query=Reading&count=50`;
  export default {
    data() {
      return {
        lists: [],
        paginate: ['lists'],
      }
    },
    mounted() {
      axios.get(TOKEN)
        .then((res) => {
          this.lists = res.data.messages.matches;
        });
    }
  }
</script>

<style>
.paginate-links {
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.paginate-links li {
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-weight: 700;
  color: #3a2c09;
  margin-right: 5px;
}
.paginate-links li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #3a2c09;
  border-radius: 4px;
  cursor: pointer;
}
.paginate-links li a:hover,
.paginate-links li.active a,
.paginate-links li.left-arrow a,
.paginate-links li.right-arrow a {
  color: #3a2c09;
  background-color: #ebe9e6;
  opacity: 1;
}
.paginate-links li.right-arrow {
  margin-right: 0;
}
.paginate-links li.disabled {
  display: none;
}
</style>