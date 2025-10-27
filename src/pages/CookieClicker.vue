<script setup>
import { ref } from 'vue';

let cookies = ref(0);

</script>
<template>
    <div class="Columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ cookies }} cookies!</h1>
            <div @click="cookies++">
              <img src=""></img>
            </div>
        </div>
        <div class="column has-background-warning">
            test
        </div>
        <div class="column has-background-info">
            test
        </div>
    </div>
</template>