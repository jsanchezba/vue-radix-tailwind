<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/ui/theme-switcher/ThemeSwitcher.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <Button @click="count++">count is {{ count }}</Button>

    <ThemeSwitcher />
  </div>
</template>

<style scoped>

</style>
