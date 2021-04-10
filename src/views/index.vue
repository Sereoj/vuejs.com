<template>
<div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Актуальное</h2>
        <button class="btn btn-sm btn-primary">Все статьи</button>
      </div>

      <div class="row">
          <div v-for="post in newPosts" :key="post.id" class="col-3">
            <Card :item="post"></Card>
          </div>
      </div>
    </section>

    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Случайная статья</h2>
      </div>


      <a href="#" class="card bg-dark text-white">
        <img class="card-img" src="assets/images/placeholder-blue.png" alt="placeholder">
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
      newPosts:{
      }
    }
  },
  mounted(){
    this.getNewPosts();
  },
  methods:{
    getNewPosts()
    {
      var count = articles.length - 1;
      this.newPosts[0] = articles[count];
      this.newPosts[1] = articles[count - 1];
      this.newPosts[2] = articles[count - 2];

      console.log(this.newPosts);
    },
    getRandomPost(){

    }
  }
}
</script>