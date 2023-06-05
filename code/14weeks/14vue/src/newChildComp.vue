<script setup>
import {ref } from 'vue';

// 이벤트를 배열로 만들어서 저장, abc임 
const emit = defineEmits(['abc']); 
emit('abc', 'ABCD'); 
//abc인 이벤트, ABCD를 전달 

const a = ref('ABC');
const props = defineProps({
    msg: String,
    vind: Number
})

</script>

<template>
    <h1>new Child </h1>
    <h2> {{  msg  }}</h2>
    <slot>
        
    </slot>

</template>

<style>


</style>