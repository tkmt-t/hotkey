<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-text>
          <ClientOnly>
            <orga-tabs
              :hotkey-enabled="!isOpen"
              hello-key="h"
              bye-key="b"
            />
          </ClientOnly>
        </v-card-text>

        <v-card-actions>
          <mole-dialog v-model="isOpen" />
          <mole-menu />
        </v-card-actions>
      </v-card>
    </v-main>
    <atom-footer />
  </v-app>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
