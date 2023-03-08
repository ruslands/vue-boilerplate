import type { RouteRecordRaw } from "vue-router";
import FooterMain from "@/layouts/FooterMain.vue";
import HeaderMain from "@/layouts/HeaderMain.vue";

export default [
  {
    path: "/sign",
    component: () => import("@/layouts/LayoutSign.vue"),
    children: [
      {
        path: "",
        name: "signIn",
        components: { default: () => import("@/views/Sign/SignInView.vue") },
      },
      {
        path: "select-role",
        name: "selectRole",
        components: {
          default: () => import("@/views/Sign/SelectRoleView.vue"),
        },
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/LayoutMain.vue"),
    children: [
      {
        path: "",
        name: "orders",
        components: {
          default: () => import("@/views/OrdersPickerView.vue"),
          footer: FooterMain,
          header: HeaderMain,
        },
      },
      {
        path: "order/:id",
        name: "orderDetail",
        components: { default: () => import("@/views/OrderDetailView.vue") },
      },
      {
        path: "delivery",
        name: "delivery",
        components: { default: () => import("@/views/DeliveryView.vue") },
      },
      {
        path: "profile",
        name: "profile",
        components: { default: () => import("@/views/ProfileView.vue") },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "home" },
  },
] as RouteRecordRaw[];
