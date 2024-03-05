<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useColorMode } from '@vueuse/core'


const mode = useColorMode({
    modes: {
        dim: 'dim',
        cafe: 'cafe',
    },
})

</script>

<template>
    <Button @click="mode = 'dark'">Dark</Button>
    <Button @click="mode = 'light'">Light</Button>
</template>