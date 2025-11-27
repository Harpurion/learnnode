<script setup>
import { ref } from 'vue';
let res = await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
console.log(data);
let joke = ref('');
joke.value = data.value;

res = await fetch('https://xkcd.com/1023/');
</script>

<template>
    <h1>{{ joke }}</h1>
</template>