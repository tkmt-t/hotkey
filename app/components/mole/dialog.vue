<template>
  <v-dialog
    v-model="isOpen"
    max-width="500"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
      >
        <template #append>
          <atom-hotkey
            v-if="hotkeyEnabled && !isOpen"
            :keys="openKeys"
            :on-hotkey="open"
            description="ダイアログ オープン"
          />
        </template>
      </v-btn>
    </template>

    <template #default>
      <v-card title="Dialog">
        <v-card-text>
          <div class="d-flex ga-2">
            <atom-hello-button
              :hotkey-enabled="hotkeyEnabled && isOpen"
              :hotkey-keys="helloKey"
            />
            <atom-bye-button
              :hotkey-enabled="hotkeyEnabled && isOpen"
              :hotkey-keys="byeKey"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
            @click="close"
          >
            <template #append>
              <atom-hotkey
                v-if="hotkeyEnabled && isOpen"
                :keys="closeKeys"
                :on-hotkey="close"
                description="ダイアログ クローズ"
              />
            </template>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false })

const {
  hotkeyEnabled,
  openKeys,
  closeKeys,
  helloKey,
  byeKey,
} = defineProps<{
  hotkeyEnabled: boolean
  openKeys: string
  closeKeys: string
  helloKey: string
  byeKey: string
}>()

const open = () => isOpen.value = true
const close = () => isOpen.value = false
</script>
