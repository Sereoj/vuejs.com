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
            v-model="newPost.name"
            placeholder="Придумайте название статьи"
          />
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea
            class="form-control"
            v-model="newPost.description"
            placeholder="Напишите описание статьи"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input type="file" class="form-control"/>

          <img
            src="assets/images/placeholder-blue.png"
            class="w-100 mt-4"
            alt="preview"
          />
        </div>

        <button class="btn btn-success" @click.prevent="SendNewPost()">Добавить статью</button>
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
      articles,
      newPost:{
        id: null,
        name: null,
        description: null,
        image: 'assets/images/placeholder-blue.png',
        date: '2021-04-10 20:00:00'
      }
    }
  },
  methods:{
    SendNewPost()
    {
      var counter = articles.length + 1;
      this.newPost.id = counter ++;
      this.articles.push(this.newPost);

      console.log(this.articles);
    }
  }
}
</script>