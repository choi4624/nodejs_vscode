<script setup>
import {ref } from 'vue';

const a = ref('ABC');
const props = defineProps({
    msg: String,
    vind: Number
})

</script>

<template>

    <h1> Child Component </h1>
    <h2>{{ a }}</h2>
    <!-- 자식 만들기 -->
    <h3>{{  msg }}</h3>
    <h1> Child vind </h1>
    <h2>{{ vind }}</h2>

</template>

<style>


</style>