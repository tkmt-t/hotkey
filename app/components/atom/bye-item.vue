<template>
  <v-list-item
    :title="`${greeting}:${props.hotkeyKeys}`"
    @click="onClick"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  hotkeyEnabled: boolean
  hotkeyKeys: string
}>()

const greeting = 'bye'

const onClick = () => alert(greeting)

useHotkeyRegistration(
  props.hotkeyKeys,
  onClick,
  () => props.hotkeyEnabled,
  'bye をアラート通知',
)
</script>
