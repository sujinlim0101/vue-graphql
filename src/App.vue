<script setup>
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable';
import ALL_BOOKS_QUERY from './graphql/allBooks.query.gql'

const searchTerm = ref('')
const { result, loading, error } = useQuery(ALL_BOOKS_QUERY, () => ({ search: searchTerm.value }))
</script>

<template>
  <input type="text" v-model="searchTerm" />
  <p v-if="loading">loading...</p>
  <p v-else-if="error">Something went wrong! Please try again</p>
  <template v-else>
    <p v-for="book in result.allBooks" :key="book.id">
      {{ book.title }}
    </p>
  </template>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
