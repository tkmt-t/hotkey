<template>
  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
      />
    </template>

    <template #default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          <div class="d-flex ga-2">
            <atom-hello-button />
            <atom-bye-button />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
</script>
