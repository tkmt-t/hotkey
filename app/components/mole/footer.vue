<template>
  <v-footer
    height="auto"
    app
  >
    <ClientOnly>
      <v-container
        fluid
        class="ma-0 pa-0"
      >
        <v-row
          class="ma-0 pa-0"
          density="compact"
        >
          <v-col
            v-for="slot in slots"
            :key="slot.key"
            cols="2"
            class="ma-0 pa-0"
          >
            <v-sheet
              rounded="sm"
              class="pa-1 border-lg"
              :title="slot.label ? `${slot.key}: ${slot.label}` : slot.key"
            >
              <span class="font-weight-bold mr-2">{{ slot.key }}</span>
              <span>{{ slot.label }}</span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </ClientOnly>
  </v-footer>
</template>

<script setup lang="ts">
const { store } = useHotkeyStore()

const fKeys = [
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
  'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
] as const

const slots = computed(() =>
  fKeys.map((key) => {
    const hit = store.value.find(item =>
      item.keys.toLowerCase() === key.toLowerCase())
    return {
      key,
      label: hit?.description ?? '',
    }
  }),
)
</script>
