<template>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab
      :value="hello"
      :text="`${hello}:${props.helloTabKey}`"
    />
    <v-tab
      :value="bye"
      :text="`${bye}:${props.byeTabKey}`"
    />
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="hello">
      <mole-hello
        :hotkey-enabled="props.hotkeyEnabled && tab == hello"
        :hotkey-keys="props.helloButtonKey"
      />
    </v-tabs-window-item>

    <v-tabs-window-item :value="bye">
      <mole-bye
        :hotkey-enabled="props.hotkeyEnabled && tab == bye"
        :hotkey-keys="props.byeButtonKey"
      />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
const props = defineProps<{
  hotkeyEnabled: boolean
  helloTabKey: string
  byeTabKey: string
  helloButtonKey: string
  byeButtonKey: string
}>()

const hello = 'hello'

const bye = 'bye'

const tab = ref(hello)

useDynamicHotkey(props.helloTabKey, () => tab.value = hello, () => props.hotkeyEnabled)
useDynamicHotkey(props.byeTabKey, () => tab.value = bye, () => props.hotkeyEnabled)
</script>
