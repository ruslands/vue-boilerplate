import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export function useRoleSelector() {
  enum RoleTypes {
    PICKER = "picker",
    COURIER = "courier",
  }
  const currentRole = ref(useStorage("role", RoleTypes.PICKER));

  const selectRole = (role: RoleTypes) => {
    currentRole.value = role;
  };

  return { currentRole, RoleTypes, selectRole };
}
