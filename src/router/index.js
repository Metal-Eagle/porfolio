import {
    createWebHistory,
    createRouter
} from "vue-router";
// import all sections
import homePage from "@/views/homePage.vue";
import projects from "@/views/projectsPage";
import contact from "@/views/contactPage";
import project from "@/views/projectPage.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: homePage,
    },
    {
        path: "/projects",
        name: "projects",
        component: projects,
    },
    {
        path: "/contact",
        name: "contact",
        component: contact,
    },
    {
        path: "/project",
        name: "project",
        component: project,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;