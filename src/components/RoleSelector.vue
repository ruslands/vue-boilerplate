<script lang="ts" setup>
import { useRoleSelector } from "@/composables/useRoleSelector";

const { currentRole, selectRole, RoleTypes } = useRoleSelector();
</script>
<template>
  <div class="flex flex-col">
    <span class="mb-2 self-center">Выберите роль:</span>
    <div class="self-center selector_role_container rounded-md w-full flex">
      <div
        class="flex-1 flex items-center justify-center py-2.5"
        :class="{ 'selector_role--active': currentRole === RoleTypes.PICKER }"
        @click="selectRole(RoleTypes.PICKER)"
      >
        <span class="font-semibold text-sm text-black">
          {{ $t("profile.roles.picker") }}
        </span>
      </div>
      <div
        class="flex-1 flex items-center justify-center py-2.5"
        :class="{ 'selector_role--active': currentRole === RoleTypes.COURIER }"
        @click="selectRole(RoleTypes.COURIER)"
      >
        <span class="font-semibold text-sm text-black">
          {{ $t("profile.roles.courier") }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selector_role_container {
  border: 1px solid #d3d3d3;
  max-width: 260px;
}

.selector_role--active {
  background: #23bd1b;

  span {
    color: #fff;
  }
}
</style>
