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

const greeting = 'hello'

const onClick = () => alert(greeting)

useHotkeyRegistration(
  props.hotkeyKeys,
  onClick,
  () => props.hotkeyEnabled,
  'hello をアラート通知')
</script>
