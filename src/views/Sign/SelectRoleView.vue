<script lang="ts" setup>
import { ref } from "vue";
import SelectRoleItem from "@/components/SelectRoleItem.vue";

const user = "SpikkerNet";

const isRemember = ref(true);

const userRoles = ref([
  {
    id: 1,
    type: "picker",
    active: false,
  },
  {
    id: 2,
    type: "courier",
    active: true,
  },
]);

const setActiveRole = (id: number) => {
  userRoles.value.map((item) => {
    return (item.active = false);
  });

  const currentRole = userRoles.value.find((item) => item.id === id);

  if (currentRole) {
    currentRole.active = true;
  }
};
</script>
<template>
  <div class="mt-12 w-full text-center">
    <div class="text-base-text text-sm mb-4 text-center">
      <span class="font-semibold"> {{ user }}, </span>
      <span>
        {{ $t("sign.entered_us") }}
      </span>
    </div>
    <van-space :size="35" class="mb-11">
      <SelectRoleItem
        v-for="role in userRoles"
        :key="role.id"
        :type="role.type"
        :is-active="role.active"
        @click="setActiveRole(role.id)"
      />
    </van-space>
    <div class="flex items-center mb-14">
      <van-switch
        v-model="isRemember"
        active-color="#23bd1b"
        class="mr-4"
        :size="22"
      >
        <template #node>
          <div class="icon-wrapper">
            <van-icon :name="isRemember ? 'success' : 'cross'" />
          </div>
        </template>
      </van-switch>
      <span class="text-base-text text-sm">
        {{ $t("sign.remember_my_choice") }}
      </span>
    </div>
    <van-button block color="#23BD1B">
      <span class="uppercase font-medium text-sm">
        {{ $t("continue") }}
      </span>
    </van-button>
  </div>
</template>

<style lang="scss" scoped>
.icon-wrapper .van-icon-success {
  color: #23bd1b;
}

.icon-wrapper .van-icon-cross {
  color: var(--van-gray-5);
}
</style>
