<template>
  <q-layout view="lHh Lpr lFf" class="items-center flex justify-center">
    <div class="page-container">
      <div class="header">
  <!--        상단 메뉴-->
        <div class="flex justify-between menu-container items-center">
          <div>
            {{ webTitle }}
          </div>

          <div class="row q-gutter-x-md">
            <q-btn v-for="menu of webMenus" flat size="sm" class="q-ma-none" @click="onClickMenu(menu)">
              {{ menu.name }}
            </q-btn>
          </div>
        </div>
      </div>


      <q-page-container class="content">
          <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const webTitle = ref('My Website')
const webMenus = ref([{name: 'Notice', path: '/'}, {name: 'Board', path: 'Board'}, {name: 'Gallery', path: 'Gallery'}, {name: 'Visitor', path: 'Visitor'}])

const $router = useRouter()
const onClickMenu = ({path}) => {
  $router.push({path})
}

</script>

<style scoped>
.content {
  width: 70vw;
  height: 80vh;
}

.page-container {
  border: 1px solid black;
  border-radius: 10px;
}

.header {
  border-bottom: 1px solid black;
}

.menu-container {
  margin: 10px 15px 10px 15px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
