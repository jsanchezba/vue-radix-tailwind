<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
    <h1>Main page</h1>
    <div>
        <router-link :to="{ name: 'Home'}">Home</router-link>
        <router-link :to="{ name: 'About'}">About</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>