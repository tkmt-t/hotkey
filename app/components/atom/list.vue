<template>
  <client-only>
    <v-list lines="one">
      <v-list-item
        v-for="record in store"
        :key="record.id"
        :title="`${record.keys}:${record.description}`"
        density="compact"
      />
    </v-list>
  </client-only>
</template>

<script setup lang="ts">
const store = hotkeyStore.store
</script>
