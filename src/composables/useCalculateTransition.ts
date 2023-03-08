import { useRoute } from "vue-router";

export default () => {
  const route = useRoute();

  function calcTransition() {
    return (route.params.transitionName as string) || "fade";
  }

  return {
    calcTransition,
  };
};
