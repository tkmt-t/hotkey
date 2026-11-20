<template>
  <v-btn
    :text="`${greeting}:${props.hotkeyKeys}`"
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

useDynamicHotkey(props.hotkeyKeys, onClick, () => props.hotkeyEnabled)
</script>
