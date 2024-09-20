<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const desc = ref("");

const submitTask = async () => {
    try {
        const response = await axios.post("http://localhost:3000/task/new", {
            name: name.value,
            description: desc.value,
        });
        console.log(response.data);
        name.value = "";
        description.value = "";
    } catch (error) {
        console.error("Erreur lors de l'envoi de la tâche:", error);
    }
};
</script>

<template>
    <h1>Ajouter une nouvelle tâche</h1>

    <form @submit.prevent="submitTask">
        <div>
            <label for="name">Task name:</label>
            <input id="name" v-model="name" type="text" required />
        </div>

        <div>
            <label for="description">Task description:</label>
            <input id="description" v-model="desc" type="text" required />
        </div>

        <button type="submit">Add task</button>
    </form>

    <router-link to="/tasks">See saved tasks</router-link>
</template>

<style scoped></style>
