<template>
  <nav :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <NuxtLink to="/" class="navbar__logo" @click="closeMenu">
      <img
        src="~/assets/illustrations/logos/logo-green.svg"
        alt="Ohayon – Accueil"
      />
    </NuxtLink>

    <button
      class="navbar__toggle"
      :class="{ 'navbar__toggle--open': mobileMenuOpen }"
      type="button"
      :aria-expanded="mobileMenuOpen"
      aria-label="Ouvrir le menu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="navbar__links" :class="{ 'navbar__links--open': mobileMenuOpen }">
      <li>
        <NuxtLink to="/qui-sommes-nous" @click="closeMenu"
          >Qui sommes-nous</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/nos-services" @click="closeMenu">Nos services</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/nous-rejoindre" @click="closeMenu"
          >Nous rejoindre</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/contact" @click="closeMenu">Contactez-nous</NuxtLink>
      </li>
      <li class="navbar__links-cta">
        <NuxtLink to="/vos-outils" class="navbar__btn" @click="closeMenu"
          >Vos outils</NuxtLink
        >
      </li>
    </ul>

    <NuxtLink to="/vos-outils" class="navbar__btn navbar__btn--desktop">
      Vos outils
    </NuxtLink>
  </nav>
</template>

<script setup>
const scrolled = ref(false);
const mobileMenuOpen = ref(false);

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMenu() {
  mobileMenuOpen.value = false;
}

watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 50;
  });
});
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

.navbar__links-cta {
  display: none;
}

.navbar__links .navbar__btn {
  color: #fff;
}

.navbar__links .navbar__btn:hover {
  color: var(--color-primary);
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
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
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

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 32px;
  height: 32px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.navbar__toggle span {
  display: block;
  width: 26px;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.navbar__toggle--open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.navbar__toggle--open span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 900px) {
  .navbar {
    padding: 0 24px 0 12px;
  }

  .navbar,
  .navbar--scrolled {
    height: 60px;
  }

  .navbar__logo img,
  .navbar--scrolled .navbar__logo img {
    height: 38px;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__btn--desktop {
    display: none;
  }

  .navbar__links {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background-color: var(--color-background);
    padding: 10px 24px 30px;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition:
      transform 0.3s,
      opacity 0.3s,
      visibility 0.3s;
    overflow-y: auto;
  }

  .navbar__links--open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar__links li {
    width: 100%;
    border-bottom: 1px solid rgba(28, 177, 161, 0.15);
  }

  .navbar__links a {
    display: block;
    padding: 16px 0;
    font-size: 17px;
  }

  .navbar__links-cta {
    display: block;
    width: 100%;
    border-bottom: none;
    margin-top: 20px;
  }

  .navbar__links-cta .navbar__btn {
    display: block;
    text-align: center;
  }

  .navbar--scrolled .navbar__links {
    top: 60px;
  }
}
</style>
