<!-- <script setup lang="ts">
const { data, handleDelete } = defineProps();
console.log(data);
</script>
<template>
    <div class="card">
        <div>
            <strong>{{ data?.name }}:</strong> {{ data?.description }}
            {{ data?._id }}
            <button v-on:click="handleDelete(data._id)">delete</button>
        </div>
    </div>
</template>
<style scoped>
.card {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
</style> -->
