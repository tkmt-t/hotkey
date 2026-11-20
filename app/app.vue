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
                  hello-tab-key="h"
                  bye-tab-key="b"
                  hello-button-key="alt+h"
                  bye-button-key="alt+b"
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
            open-keys="o"
            close-keys="c"
            hello-key="1"
            bye-key="2"
          />
          <mole-menu
            :hotkey-enabled="!isOpen"
            hotkey-keys="m"
            hello-keys="ctrl+h"
            bye-keys="ctrl+b"
          />
        </v-card-actions>
      </v-card>
    </v-main>
    <atom-footer />
  </v-app>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
