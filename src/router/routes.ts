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
        meta: {
          title: "menu.orders",
        },
        components: {
          default: () => import("@/views/OrdersPickerView.vue"),
          footer: FooterMain,
          header: HeaderMain,
        },
      },
      {
        path: "order/:id",
        name: "orderDetail",
        meta: {
          title: "menu.order_detail",
        },
        components: {
          default: () => import("@/views/OrderDetailView.vue"),
          footer: FooterMain,
          header: HeaderMain,
        },
      },
      {
        path: "delivery",
        name: "delivery",
        meta: {
          title: "menu.bag",
        },
        components: {
          default: () => import("@/views/DeliveryView.vue"),
          footer: FooterMain,
          header: HeaderMain,
        },
      },
      {
        path: "profile",
        name: "profile",
        meta: {
          title: "menu.profile",
        },
        components: {
          default: () => import("@/views/ProfileView.vue"),
          footer: FooterMain,
          header: HeaderMain,
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "home" },
  },
] as RouteRecordRaw[];
