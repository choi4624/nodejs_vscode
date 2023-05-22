<!-- setup 안붙이면 다른 api를 불러옴 -->
<script setup>
// import { ref } from "vue";

// const msg = ref('Hello World!')

import { reactive, ref } from "vue";

const state = reactive({ count: 9 });

const msg = ref('goodbye declare');
const count = ref(0); // object, string, number 
count.value = 20; // count 의 값만 바꾼다는 의미 
msg.value = 'hello declare';

// 적은 양의 코드로도 쉽게 바꿀 수 있음 

// 스타일 적용하기 

const titleClass = ref('title');
// 다른 의미 const titleClass = 'title';
//  ref는 반응형 > titleClass 값이 바뀌면 바로 적용됨, ref 없으면 바뀌지 않음 
const titleClass2 = 'title2';


const link = ref('https://www.google.com');

function increment(){
    alert('click event occured!');
    count.value++;
    //count++ 해서 카운트 자체를 증가시키면 안됩니다. 
}

// binding 
const text = ref('abcd');
text.value = 'ayibbyigrwq';
// e 가 이벤트 객체 
function binding(e)
{
    text.value = e.target.value; // 이벤트 발생 타겟의 value를 수정
}

const text2 = ref('abcdafds');

</script>

<style>

.title{
    color: brown;
}

.title2{
    color: blue;
}
</style>

<template>
    <h1 v-bind:class="titleClass2"><a :href="link"> 구글 링크 </a></h1>

    <h1>{{ msg }}</h1> <!-- HTML 코드 안에서는 msg.value할 필요 없음 -->        
    <h2>{{ state.count }}</h2>
    <h2>{{ count }}</h2>

    <h1 v-bind:class="titleClass">{{ state.count }}</h1>
    <button @click="increment">보통 크기의 버튼</button>

    <!-- form 바인딩 템플릿 -->
    <h1> {{ text }} </h1>
    <input v-bind:value="text" v-on:input="binding"/>
    
    <!-- 간단하게 바인딩 하기 -->
    <div>    
        <input v-model="text2">
        <h2>{{ text2 }}</h2>
    </div>

    
</template>