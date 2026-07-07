<template>
  <div class="sitemap">
    <header class="sitemap__header">
      <h1>Plan du site</h1>
      <p class="sitemap__intro">
        Retrouvez l'ensemble des pages du site du Cabinet Ohayon &amp; Associés.
      </p>
    </header>

    <div class="sitemap__grid">
      <section class="sitemap__group">
        <h2>Navigation</h2>
        <ul class="sitemap__list">
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="/qui-sommes-nous">Qui sommes-nous</NuxtLink></li>
          <li><NuxtLink to="/nos-services">Nos services</NuxtLink></li>
          <li><NuxtLink to="/nous-rejoindre">Nous rejoindre</NuxtLink></li>
          <li><NuxtLink to="/vos-outils">Vos outils</NuxtLink></li>
          <li><NuxtLink to="/contact">Contactez-nous</NuxtLink></li>
        </ul>
      </section>

      <section class="sitemap__group">
        <h2>Informations légales</h2>
        <ul class="sitemap__list">
          <li><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
          <li><NuxtLink to="/plan-du-site">Plan du site</NuxtLink></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.sitemap {
  max-width: 850px;
  margin: 0 auto;
  padding: 80px 40px 120px;
}

.sitemap__header {
  margin-bottom: 60px;
  padding-bottom: 30px;
  border-bottom: 3px solid var(--color-primary);
}

.sitemap__header h1 {
  margin: 0 0 10px;
  color: var(--color-primary);
}

.sitemap__intro {
  margin: 0;
  color: #888;
  font-size: 15px;
}

.sitemap__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.sitemap__group h2 {
  color: var(--color-primary);
  font-size: 24px;
  margin: 0 0 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e6e6e6;
}

.sitemap__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sitemap__list a {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text);
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.sitemap__list a:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

@media (max-width: 640px) {
  .sitemap {
    padding: 60px 24px 90px;
  }

  .sitemap__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
