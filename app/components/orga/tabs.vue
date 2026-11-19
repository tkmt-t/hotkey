<template>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab
      v-for="item in tabs"
      :key="item"
      :value="item"
    >
      {{ item }}
    </v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="hello">
      <mole-hello />
    </v-tabs-window-item>

    <v-tabs-window-item :value="bye">
      <mole-bye />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
const {
  hotkeyEnabled,
  helloKey,
  byeKey,
} = defineProps<{
  hotkeyEnabled: boolean
  helloKey: string
  byeKey: string
}>()

const hello = 'hello'

const bye = 'bye'

const tabs = [hello, bye]

const tab = ref(hello)

const enabled = computed(() => hotkeyEnabled)

useDynamicHotkey(helloKey, () => tab.value = hello, enabled)
useDynamicHotkey(byeKey, () => tab.value = bye, enabled)
</script>
