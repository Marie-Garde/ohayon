<template>
  <nav :class="['navbar', { 'navbar--scrolled': scrolled }]">
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

<script setup>
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  transition: height 0.3s;
  padding: 0 40px 0 0;
  background-color: var(--color-background);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(50, 50, 50, 0.5);
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
  font-weight: 300;
  font-size: 18px;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.navbar__links a:hover {
  color: var(--color-text);
}

.navbar__btn {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  background-color: var(--color-primary);
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.navbar__btn:hover {
  background-color: #fff;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.navbar--scrolled {
  height: 60px;
}

.navbar--scrolled .navbar__logo img {
  height: 50px;
}

.navbar--scrolled .navbar__btn {
  padding: 10px 24px;
}
</style>
