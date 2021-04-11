<template>
<div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Актуальное</h2>
        <button @click.prevent="openAllPosts()" class="btn btn-sm btn-primary">Все статьи</button>
      </div>

      <div class="row">
          <div v-for="post in newPosts" v-bind:key="post.id" class="col-3">
            <Card :item="post"></Card>
          </div>
      </div>
    </section>

    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Случайная статья</h2>
      </div>


      <a href="#" @click.prevent="getRandomPost()" class="card bg-dark text-white">
        <img class="card-img" :src="getImgUrl('assets/images/placeholder-blue.png')" alt="placeholder">
        <div class="card-img-overlay">
          <h5 class="card-title">Название статьи</h5>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import {articles} from '@/assets/js/data'
import Card from '@/components/cards';
export default {
  components: {Card},
  data()
  {
    return {
      newPosts: null
    }
  },
  mounted(){
    this.getNewPosts();
  },
  methods:{
    openAllPosts()
    {
      this.$router.push({ name: 'all' });
    },
    getNewPosts()
    {
      this.newPosts = [];
      var count = articles.length - 1;
      this.newPosts[0] = articles[count];
      this.newPosts[1] = articles[count - 1];
      this.newPosts[2] = articles[count - 2];

      console.log(this.newPosts);
    },
    getRandomPost(){
      var PostId = 1;
      this.$router.push({ path: `/post/${PostId}`, params:{id: PostId, article: articles[PostId]} });
    },
    getImgUrl(pic) {
      /**
       * Костыль =D
       * https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
       */
      return require("../" + pic);
    }
  }
}
</script>