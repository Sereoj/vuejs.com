<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="getImgUrl(item.image)" alt="placeholder" />
      <div class="card-body">
        <p class="card-text">
          <small class="text-muted">{{ item.date }}</small>
        </p>

        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>

        <a href="#" class="btn btn-primary">Читать</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["item"],
  methods: {
    getImgUrl(pic) {
      /**
       * Костыль =D
       * https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
       */
      return require("../" + pic);
    },
  },
};
</script>
