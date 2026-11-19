<template>
  <v-menu
    v-model="open"
    open-on-hover
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        icon
        v-bind="activatorProps"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <atom-hello-item />
      <atom-bye-item />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
