<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Добавление статьи</h2>
      </div>

      <form>
        <div class="mb-3">
          <label>Название</label>
          <input
            type="text"
            class="form-control"
            placeholder="Придумайте название статьи"
          />
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea
            class="form-control"
            placeholder="Напишите описание статьи"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input type="file" class="form-control" />

          <img
            src="assets/images/placeholder-blue.png"
            class="w-100 mt-4"
            alt="preview"
          />
        </div>

        <button class="btn btn-success">Добавить статью</button>
      </form>
    </section>
  </div>
</template>
<script>
import {articles} from '@/assets/js/data'
export default {
  data()
  {
    return {
      newPosts:{}
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