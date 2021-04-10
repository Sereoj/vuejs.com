<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex align-items-baseline">
        <h2>Все статьи</h2>
      </div>

      <div class="row">
        <div v-for="article in articles" v-bind:key="article" class="col-3">
          <Card :item="article"></Card>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { articles } from "@/assets/js/data";
import Card from "@/components/cards";
export default {
  components: { Card },
  data() {
    return {
      articles,
    };
  },
};
</script>