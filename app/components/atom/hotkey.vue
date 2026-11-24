<template>
  <v-hotkey
    v-bind="$attrs"
    :keys="props.keys"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  keys: string
  onHotkey: (e: KeyboardEvent) => void
  description?: string
}>()

useHotkey(props.keys, props.onHotkey)

useHotkeyRegistration(props.keys, props.description)
</script>
