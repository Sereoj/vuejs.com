<template>
  <div class="container">
    <section class="py-5">
      <h2 class="mb-4">Название статьи</h2>

      <img
        class="mb-4 w-100"
        src="assets/images/placeholder-blue.png"
        alt="placeholder"
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
        dignissimos sequi similique. Asperiores atque autem cumque eius expedita
        id illo incidunt laborum libero magni neque nostrum nulla quaerat quam
        quas repellat repudiandae sed soluta, totam veniam. Accusantium at
        commodi consequatur, dolore est facere fugiat maiores modi, nemo
        perspiciatis placeat, quae quaerat quas quibusdam quos reiciendis rem
        sunt tenetur ut voluptatibus. Aspernatur, autem blanditiis, commodi
        consequuntur culpa cumque, deserunt dignissimos eius expedita illo ipsam
        iste officiis quam quasi qui quidem recusandae sint soluta. Aliquam
        aliquid consectetur dolores id? Animi, aut doloremque error illo labore
        laudantium, maxime molestias nesciunt porro, sunt ut!
      </p>
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
      post: null,
      error: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    // при изменениях маршрута запрашиваем данные снова
    $route: 'fetchData'
  },
  methods:{
    fetchData()
    {
      var postid = this.$route.params.id;
      console.log(postid);
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