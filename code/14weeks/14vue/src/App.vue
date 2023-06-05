<script setup>
import { ref, computed } from 'vue';
import {onMounted} from 'vue';
import {watch} from 'vue';
import ChildComp from './ChildComp.vue';
import NewChildComp from './newChildComp.vue';


const count = ref(0);
const computedCount = computed(() =>{
  return count.value + 1;
})

function f(){
  count.value++;
}

const pref = ref(null);

onMounted(() => 
{
  pref.value.innerHTML = "변경된 값";
})

watch(count, (newCount) => {
  console.log(`new count is: ${newCount}`);
})

const message = ref('');
function g(msg) {
  console.log(msg);
  message.value = msg;
}

</script>

<template>

  <!-- ChildComp.vue 파일이 나오도록 하기 -->
  <ChildComp msg="부모인 App.vue로부터 전달된 값"/>
  <ChildComp :vind="count" />

<button @click="f">
  클릭
</button>

<input type="number" v-model="count">

<h1>{{ count }}</h1>
<h2>{{ computedCount }}</h2>

<!-- inner HTML 텍스트 콘텐츠임 -->
<p ref="pref">DOM 객체 </p>

<!-- g라는 함수가 자식에서 시작함 -->
<NewChildComp @abc="g" v-bind:msg="count"></NewChildComp>
<h1>{{  message }}</h1>

<NewChildComp>
  this is some slot content! 
</NewChildComp>

</template>