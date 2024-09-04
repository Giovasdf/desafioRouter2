import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productos",
    name: "productos",
    component: () =>
      import( "../views/ProductosView.vue"),
  },
  {
    path: "/producto/:id",
    name: "producto",
    component: () =>
      import(
       "../views/ProductoDetalleView.vue"
      ),
    props: (route) => {
      return {
        id: Number(route.params.id),
        nombre: "Tomate",
        precio: 2000,
      };
    },
    children: [
      {
        path: "comentarios",
        component: () =>
          import(
            "../views/ComentariosView.vue"
          ),
        name: "comentarios",
      },
    ],
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import( "../views/ContactoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
