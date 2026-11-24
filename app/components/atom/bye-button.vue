<template>
  <v-btn
    :text="greeting"
    @click="onClick"
  >
    <template #append>
      <atom-hotkey
        v-if="props.hotkeyEnabled"
        :keys="props.hotkeyKeys"
        :on-hotkey="onClick"
        description="bye をアラート通知"
      />
    </template>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  hotkeyEnabled: boolean
  hotkeyKeys: string
}>()

const greeting = 'bye'

const onClick = () => alert(greeting)
</script>
