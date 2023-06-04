<template>
  <div class="flex justify-center">
    <div class="full-width">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
    </div>

    <div class="full-width">
      <q-input
        v-model="newMessage"
        outlined dense
      />
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const newMessage = ref('')
</script>

<style scoped>

</style>
