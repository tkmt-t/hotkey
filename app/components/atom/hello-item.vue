<template>
  <v-list-item
    :title="greeting"
    @click="onClick"
  />
</template>

<script setup lang="ts">
const greeting = 'hello'

const onClick = () => alert(greeting)
</script>
