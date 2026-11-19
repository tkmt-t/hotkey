<template>
  <v-list-item
    :title="greeting"
    @click="onClick"
  />
</template>

<script setup lang="ts">
const greeting = 'bye'

const onClick = () => alert(greeting)
</script>
