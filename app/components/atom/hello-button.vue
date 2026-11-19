<template>
  <v-btn
    :text="greeting"
    @click="onCLick"
  />
</template>

<script setup lang="ts">
const greeting = 'hello'

const onCLick = () => alert(greeting)
</script>
