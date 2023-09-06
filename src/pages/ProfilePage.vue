<template>
  <q-page padding>
    <!-- content -->
    <h3>Profile</h3>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  async created() {
    const character = await this.$axios.get(
      `https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`
    );
    console.log(character.data);
  },
  data() {
    return {
      character: '',
    };
  },
  // name: 'PageName'
});
</script>
