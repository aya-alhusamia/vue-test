<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="row justify-center">
      <q-toolbar class="col">
        <q-toolbar-title> Breaking Bad Api Example </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab
          :to="{ name: 'profile', params: { id: 1 } }"
          replace
          label="Walter White"
        />
        <q-route-tab
          :to="{ name: 'profile', params: { id: 2 } }"
          replace
          label="Jesse Pinkman"
        />
        <q-route-tab
          :to="{ name: 'profile', params: { id: 'random' } }"
          replace
          label="Random"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'LayoutName',

  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
