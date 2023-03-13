<script lang="ts" setup>
import OrderItem from "@/components/OrderItem.vue";
import BagSVG from "@/components/svg/BagSVG.vue";
import DetailStatisticOrder from "@/components/DetailStatisticOrder.vue";
import ProductItem from "@/components/ProductItem.vue";
import { showConfirmDialog } from "vant";
import "vant/es/dialog/style";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const beforeCloseFinishPick = (action: string) =>
  new Promise((resolve) => {
    console.log(action);
    setTimeout(() => {
      resolve(["cancel", "confirm"].includes(action));
    }, 1000);
  });

const finishPick = () => {
  showConfirmDialog({
    title: t("dialog_questions.order_done"),
    cancelButtonText: t("no"),
    confirmButtonText: t("yes"),
    confirmButtonColor: "#23BD1B",
    beforeClose: beforeCloseFinishPick,
  });
};
</script>
<template>
  <div>
    <OrderItem>
      <template #footer>
        <slot name="button">
          <van-button block color="#23BD1B" @click.stop="finishPick">
            <div class="flex items-center">
              <BagSVG class="bag_icon mr-2" />
              <span class="uppercase font-medium text-sm">
                {{ $t("actions_button.finish_pick") }}
              </span>
            </div>
          </van-button>
        </slot>
      </template>
    </OrderItem>
    <DetailStatisticOrder />
    <van-row class="w-full mb-3.5">
      <van-col span="3" class="text-lightest-green text-custom-13">
        {{ $t("order_detail.table.photo") }}
      </van-col>
      <van-col span="12" class="text-lightest-green text-custom-13">
        {{ $t("order_detail.table.name") }}
      </van-col>
      <van-col span="2" class="text-lightest-green text-custom-13 text-center">
        {{ $t("order_detail.table.count") }}
      </van-col>
      <van-col span="4" class="text-lightest-green text-custom-13 text-center">
        {{ $t("order_detail.table.weight") }}
      </van-col>
      <van-col span="2" class="text-lightest-green text-custom-13 text-center">
        {{ $t("order_detail.table.remainder") }}
      </van-col>
    </van-row>
    <div class="flex flex-col w-full">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </div>
</template>

<style lang="scss">
.bag_icon {
  path {
    stroke: white;
  }
}
</style>
