<template>
  <h1>This is a project page</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  layout(context) {
    return "MainLayout";
  },
});
</script>
