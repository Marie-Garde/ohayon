<template>
  <footer class="footer">
    <div class="footer__logo">
      <img
        src="~/assets/illustrations/logos/logo-white.svg"
        alt="Ohayon & Associés"
      />
    </div>
    <div class="footer__info">
      <span>&copy; 2026 Cabinet Ohayon &amp; Associés</span>
      <span>-</span>
      <span
        >Site créé par
        <a
          href="https://www.lenvoleenumerique.com/"
          target="_blank"
          rel="noopener"
          >L'envolée numérique</a
        ></span
      >
      <span>-</span>
      <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
      <span>-</span>
      <NuxtLink to="/plan-du-site">Plan du site</NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  min-height: 120px;
}

.footer__logo {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.footer__logo img {
  height: 90px;
  width: auto;
}

.footer__info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 13px;
  color: #fff;
}

.footer__info a {
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer__info a:hover {
  opacity: 0.7;
}
</style>
