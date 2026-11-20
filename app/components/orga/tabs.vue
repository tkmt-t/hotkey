<template>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab
      :value="hello"
      :text="hello"
    />
    <v-tab
      :value="bye"
      :text="bye"
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

useHotkeyRegistration(
  props.helloTabKey,
  () => tab.value = hello,
  () => props.hotkeyEnabled,
  'hello タブに切り替え')

useHotkeyRegistration(
  props.byeTabKey,
  () => tab.value = bye,
  () => props.hotkeyEnabled,
  'bye タブに切り替え',
)
</script>
