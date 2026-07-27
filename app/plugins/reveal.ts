// Plugin universel : la directive doit être enregistrée aussi côté serveur
// pour que le rendu SSR/SSG puisse résoudre `v-reveal` (sinon erreur 500 au
// prérendu). La logique DOM (IntersectionObserver) reste dans le hook
// `mounted`, qui ne s'exécute que côté client — le HTML généré contient donc
// le contenu directement visible, ce qui est idéal pour le référencement.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    // Aucune prop injectée côté serveur : l'élément est rendu tel quel.
    getSSRProps() {
      return {};
    },
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
