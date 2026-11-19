<template>
  <v-btn
    :text="greeting"
    @click="onClick"
  />
</template>

<script setup lang="ts">
const greeting = 'bye'

const onClick = () => alert(greeting)
</script>
