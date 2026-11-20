<template>
  <v-hotkey
    v-if="enabled"
    v-bind="$attrs"
    :keys="keys"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  enabled: boolean
  keys: string
  callback: HotkeyCallback
  description: string
}>()

useHotkeyRegistration(
  props.keys,
  props.callback,
  () => props.enabled,
  props.description,
)
</script>
