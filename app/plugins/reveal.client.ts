export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding) {
      const direction = binding.value || "up";
      el.classList.add("reveal", `reveal--${direction}`);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal--visible");
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );

      observer.observe(el);
    },
  });
});
