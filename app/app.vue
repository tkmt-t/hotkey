<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <orga-tabs
                  :hotkey-enabled="!isOpen"
                  hello-tab-key="f2"
                  bye-tab-key="f3"
                  hello-button-key="h"
                  bye-button-key="b"
                />
              </v-col>
              <v-col>
                <atom-list />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <mole-dialog
            v-model="isOpen"
            :hotkey-enabled="true"
            open-keys="f4"
            close-keys="f4"
            hello-key="h"
            bye-key="b"
          />
          <mole-menu
            :hotkey-enabled="!isOpen"
            hotkey-keys="f5"
            hello-keys="h+alt"
            bye-keys="b+alt"
          />
        </v-card-actions>
      </v-card>
    </v-main>
    <mole-footer />
  </v-app>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
