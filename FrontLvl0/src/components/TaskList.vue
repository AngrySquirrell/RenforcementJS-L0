<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tasks = ref([]);

const fetchTasks = async () => {
    try {
        const response = await axios.get("http://localhost:3000/tasks");
        tasks.value = response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches :", error);
    }
};
const deleteTask = async (id) => {
    try {
        // Delete & Fetch
        const response = await axios.delete(`http://localhost:3000/task/${id}`);

        // Invalidate data
        tasks.value = response.data.newData;
    } catch (error) {
        console.error("Erreur lors de la suppression de la tâche", error);
    }
};

onMounted(() => {
    fetchTasks();
});
</script>

<template>
    <h1>Liste des tâches</h1>

    <div class="tache">
        <div v-for="task in tasks" :key="task._id">
            <div class="card">
                <strong>{{ task.name }}:</strong> {{ task.description }}
                {{ task._id }}
                <button v-on:click="deleteTask(task._id)">Delete</button>
            </div>
        </div>
    </div>
    <router-link to="/">Add task</router-link>
</template>

<style scoped>
.tache {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
}

.card {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
</style>
