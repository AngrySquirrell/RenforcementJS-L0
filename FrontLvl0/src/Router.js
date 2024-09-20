// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";

const routes = [
    {
        path: "/",
        name: "Form",
        component: TaskForm,
    },
    {
        path: "/tasks",
        name: "List",
        component: TaskList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
