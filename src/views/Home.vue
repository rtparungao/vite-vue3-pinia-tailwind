<script lang="ts" setup>
import { ref } from 'vue'
import { useHomeStore } from '../store/home'

const store = useHomeStore()
const tempText = ref<String | null>(null)

tempText.value = store.txt
</script>

<template>
    <h1>Home {{ tempText }}</h1>
</template>