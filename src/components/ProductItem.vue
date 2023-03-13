<script lang="ts" setup>
import { ref } from "vue";

const show = ref(false);
</script>
<template>
  <div
    class="w-full bg-white rounded-lg mb-1.5 pt-2.5 pr-4 pb-2.5 pl-1.5"
    @click.stop="show = true"
  >
    <van-row class="w-full flex items-center">
      <van-col span="3">
        <img src="@/assets/test.png" alt="image_product" class="m-auto" />
      </van-col>
      <van-col span="12" class="text-custom-gray text-xs mr-3">
        Вода Святой Источник негазированная питьевая, 5л
      </van-col>
      <van-col span="2" class="text-black text-xs"> 1 </van-col>
      <van-col span="4" class="text-black text-xs text-center"> 0,5кг </van-col>
      <van-col span="2" class="text-xs text-black text-center"> 18 </van-col>
    </van-row>
  </div>
  <van-action-sheet v-model:show="show">
    <div class="flex flex-col justify-center items-center pt-7 px-4 pb-5">
      <div class="mb-6">
        <img src="@/assets/test2.png" alt="image_product" />
      </div>
      <p class="font-medium text-lg mb-4 text-black">
        Сыр полутвердый "Брест-Литовск", сливочный 50% 200 г
      </p>
      <hr width="100%" class="mb-6" />
      <p class="self-start text-custom-brown text-base uppercase mb-2">
        Состав
      </p>
      <span class="text-secondary-title text-xs mb-7">
        Изготовлен из молока коровьего нормализованного пастеризованного с
        использованием закваски на основе молочнокислых мезофильных и
        термофильных бактерий; соли поваренной пищевой выварочной (содержит
        пищевую добавку: вещество препятствующее слеживанию и комкованию
      </span>
      <p class="self-start text-custom-brown text-base uppercase mb-2">
        Пищевая ценность на 100 г
      </p>
      <span class="mb-7 text-black text-custom-13 self-start">
        Белки 22.5 г
      </span>
      <p class="self-start text-custom-brown text-base uppercase mb-2">
        Срок годности
      </p>
      <span class="text-black text-custom-13 self-start"> 6 месяцев </span>
    </div>
  </van-action-sheet>
</template>

<style scoped></style>
