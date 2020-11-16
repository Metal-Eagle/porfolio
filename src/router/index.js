import {
    createWebHistory,
    createRouter
} from "vue-router";
// import all sections
import homePage from "@/views/homePage.vue";
import projects from "@/views/projectsSection";
import contact from "@/views/contactSection";

import projectPage from "@/components/projects/projectPage.vue";

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
        path: "/projectPage",
        name: "projectPage",
        component: projectPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;