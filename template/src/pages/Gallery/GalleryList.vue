<template>
  <div class="flex justify-between">
      <q-carousel
        swipeable
        animated

        v-model="displayImg"
        class="carousel"
        arrows

        thumbnails
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
</template>

<script setup>
import {ref} from "vue";

const displayImg = ref(1)

</script>

<style scoped>
.carousel {
  width: 70vw;
  height: 80vh;

  border-radius: 0px 0px 10px 10px;

}
</style>
