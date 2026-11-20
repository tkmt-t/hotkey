<template>
  <v-tabs
    v-model="tab"
    grow
  >
    <v-tab
      :value="hello"
      :text="hello"
    >
      <template #append>
        <atom-hotkey
          v-if="props.hotkeyEnabled"
          :keys="props.helloTabKey"
          :enabled="tab != hello"
          :callback="() => tab = hello"
          description="hello タブに切り替え"
        />
      </template>
    </v-tab>
    <v-tab
      :value="bye"
      :text="bye"
    >
      <template #append>
        <atom-hotkey
          v-if="props.hotkeyEnabled"
          :keys="props.byeTabKey"
          :enabled="tab != bye"
          :callback="() => tab = bye"
          description="bye タブに切り替え"
        />
      </template>
    </v-tab>
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
</script>
