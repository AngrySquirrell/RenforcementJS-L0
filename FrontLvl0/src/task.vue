<script setup>
defineProps({
    name: String,
    description: String,
});
</script>
<template>
    <h3>{{ name }}</h3>
    <h4>{{ description }}</h4>
</template>
<style scoped></style>
