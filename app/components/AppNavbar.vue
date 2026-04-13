<template>
  <nav class="navbar">
    <NuxtLink to="/" class="navbar__logo">
      <img src="~/assets/illustrations/logos/logo-green.svg" alt="Ohayon – Accueil" />
    </NuxtLink>

    <ul class="navbar__links">
      <li><NuxtLink to="/qui-sommes-nous">Qui sommes-nous</NuxtLink></li>
      <li><NuxtLink to="/nos-services">Nos services</NuxtLink></li>
      <li><NuxtLink to="/nous-rejoindre">Nous rejoindre</NuxtLink></li>
      <li><NuxtLink to="/contact">Contactez-nous</NuxtLink></li>
    </ul>

    <NuxtLink to="/vos-outils" class="navbar__btn">Vos outils</NuxtLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  background-color: var(--color-background);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar__logo img {
  height: 85px;
  width: auto;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.2s;
}

.navbar__links a:hover {
  opacity: 0.7;
}

.navbar__btn {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  padding: 10px 24px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.navbar__btn:hover {
  opacity: 0.85;
}
</style>
