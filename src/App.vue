<script setup>
import RouterTabs from './components/RouterTabs.vue';



</script>
<template>
    <RouterTabs></RouterTabs>
    <div v-if="$route.meta.Container === true" class="content container mt-3">
        <Suspense>
            <RouterView></RouterView>
        </Suspense>
    </div>
    
    <div v-else class="container mt-3">
        <div class="content">
            <Suspense>
                <RouterView></RouterView>
            </Suspense>
        </div>
    </div>
</template>