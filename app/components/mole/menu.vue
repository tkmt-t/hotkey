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
      <atom-hello-item
        :hotkey-enabled="hotkeyEnabled"
        :hotkey-keys="props.helloKeys"
      />
      <atom-bye-item
        :hotkey-enabled="hotkeyEnabled"
        :hotkey-keys="props.byeKeys"
      />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  hotkeyEnabled: boolean
  hotkeyKeys: string
  helloKeys: string
  byeKeys: string
}>()

const open = ref(false)

const hotkeyEnabled = computed(() => props.hotkeyEnabled && open.value)

useHotkeyRegistration(
  props.hotkeyKeys,
  () => open.value = !open.value,
  () => props.hotkeyEnabled,
  'メニュー トグル')
</script>
