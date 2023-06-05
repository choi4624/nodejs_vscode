<script setup>
import {ref} from 'vue';
import {onMounted} from 'vue';

const data = ref('');

async function getData() {
  const response = await fetch('/api') ;
  const msg = await response.json();
  console.log(msg)
  data.value = msg.msg;

}
function postData() {
  fetch('/api') ;d
}

onMounted(() =>{
  getData();
});

</script>

<template>

<h1>Hello</h1>
  <button @click="getData">get 요청</button>
  <button @click="postData">post 요청</button>
  <h2> DATA Export </h2>
<h1>{{  data  }}</h1>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
