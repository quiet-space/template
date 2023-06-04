<template>
  <div class="flex justify-between">
    <div class="column full-width flex">
      <q-table
        :rows="list"
        :columns="columns"

        table-header-class="bg-grey-2"
        flat bordered

        hide-bottom
        v-model:pagination="pagination"
      />
    </div>

    <div class="column full-width flex items-center">
      <q-pagination
        v-model="pagination.page"
        :max="maxPage"
        size="sm"

        color="black"
      />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 3
})

const list = ref([
  {
    title: '첫 번째 게시글',
    writer: 'June',
    createdDateTime: '2012-12-12 12:22'
  }
])

const maxPage = ref(Math.ceil(list.value.length % pagination.value.rowsPerPage))

const columns = ref([
  {
    name: '제목',
    field: 'title',
    label: '제목',
    align: 'center'
  },
  {
    name: '작성자',
    field: 'writer',
    label: '작성자',
    align: 'center'

  },
  {
    name: '작성일',
    field: 'createdDateTime',
    label: '작성일',
    align: 'center'
  }
  ]
)

</script>

<style scoped>

</style>
