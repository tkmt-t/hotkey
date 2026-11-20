<template>
  <v-sheet
    class="d-flex align-center justify-center"
    style="min-height: 50vh;"
  >
    <atom-hello-button
      :hotkey-enabled="props.hotkeyEnabled"
      :hotkey-keys="props.hotkeyKeys"
    />
  </v-sheet>
</template>

<script setup lang="ts">
const props = defineProps<{
  hotkeyEnabled: boolean
  hotkeyKeys: string
}>()
</script>
