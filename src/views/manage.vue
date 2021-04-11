<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Управление статьями</h2>
        <button @click.prevent="openCreatePost()" class="btn btn-sm btn-success" >Добавить статью</button>
      </div>

      <table class="table">
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Действия</th>
        </tr>
          <Table v-for="article in articles" v-bind:key="article.id" :item="article"></Table>
      </table>
    </section>
  </div>
</template>
<script>
import { articles } from "@/assets/js/data";
import Table from "@/components/table";
export default {
  components: { Table },
  data() {
    return {
      articles,
    };
  },
  methods:{
    openCreatePost()
    {
      this.$router.push({ name: 'create' });
    }
  }
};
</script>