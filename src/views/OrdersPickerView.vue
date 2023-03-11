<script lang="ts" setup>
import OrderItem from "@/components/OrderItem.vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { showConfirmDialog } from "vant";
import "vant/es/dialog/style";

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const goToOrderDetailPage = () => {
  router.push({
    name: "orderDetail",
    params: {
      id: 223,
    },
    query: {
      backUrl: route.fullPath,
    },
  });
};

const beforeCloseTakeOrder = (action: string) =>
  new Promise((resolve) => {
    console.log(action);
    setTimeout(() => {
      resolve(["cancel", "confirm"].includes(action));
    }, 1000);
  });

const takeOrder = () => {
  showConfirmDialog({
    title: t("dialog_questions.take_oder"),
    cancelButtonText: t("no"),
    confirmButtonText: t("yes"),
    confirmButtonColor: "#23BD1B",
    beforeClose: beforeCloseTakeOrder,
  });
};

const cancelOrder = () => {
  showConfirmDialog({
    title: t("dialog_questions.cancel_order"),
    cancelButtonText: t("no"),
    confirmButtonText: t("yes"),
    confirmButtonColor: "#FF5252",
    beforeClose: beforeCloseTakeOrder,
  });
};
</script>
<template>
  <div>
    <OrderItem @click.prevent="goToOrderDetailPage">
      <template #footer>
        <van-button block color="#23BD1B" @click.stop="takeOrder">
          <span class="uppercase font-medium text-sm">
            {{ $t("actions_button.take_picker") }}
          </span>
        </van-button>
        <van-button block color="#FF5252" @click.stop="cancelOrder">
          <span class="uppercase font-medium text-sm">
            {{ $t("actions_button.cancel_pick") }}
          </span>
        </van-button>
      </template>
    </OrderItem>
    <OrderItem @click.prevent="goToOrderDetailPage">
      <template #footer>
        <van-button block color="#23BD1B" @click.stop="takeOrder">
          <span class="uppercase font-medium text-sm">
            {{ $t("actions_button.take_picker") }}
          </span>
        </van-button>
        <van-button block color="#FF5252" @click.stop="cancelOrder">
          <span class="uppercase font-medium text-sm">
            {{ $t("actions_button.cancel_pick") }}
          </span>
        </van-button>
      </template>
    </OrderItem>
  </div>
</template>

<style scoped></style>
