<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-text>
          <ClientOnly>
            <orga-tabs
              :hotkey-enabled="true"
              hello-key="h"
              bye-key="b"
            />
          </ClientOnly>
        </v-card-text>

        <v-card-actions>
          <mole-dialog />
          <mole-menu />
        </v-card-actions>
      </v-card>
    </v-main>
    <atom-footer />
  </v-app>
</template>

<script setup lang="ts">
</script>
