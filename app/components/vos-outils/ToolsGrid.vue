<template>
  <section class="tools">
    <div class="tools__grid">
      <a
        class="tools__card"
        href="#"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="tools__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" />
        </svg>
        <h3>iSuite</h3>
        <p>
          Votre espace client sécurisé pour échanger documents et
          informations avec le cabinet.
        </p>
        <span class="tools__link">Accéder à iSuite</span>
      </a>

      <a
        class="tools__card"
        href="#"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="tools__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 19h16M7 19V9M12 19V5M17 19v-7" />
        </svg>
        <h3>Pennylane</h3>
        <p>
          Suivez votre comptabilité et votre facturation en temps réel,
          depuis une seule plateforme.
        </p>
        <span class="tools__link">Accéder à Pennylane</span>
      </a>

      <a
        class="tools__card"
        href="#"
        target="_blank"
        rel="noopener"
      >
        <svg
          class="tools__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 21V8l8-5 8 5v13" />
          <path d="M9 21v-7h6v7" />
        </svg>
        <h3>Silae</h3>
        <p>
          Retrouvez vos bulletins de paie et vos démarches RH en quelques
          clics.
        </p>
        <span class="tools__link">Accéder à Silae</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.tools {
  padding: 120px 40px 130px;
}

.tools__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.tools__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 40px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.tools__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.tools__icon {
  width: 44px;
  height: 44px;
  margin-bottom: 15px;
}

.tools__card h3 {
  color: var(--color-primary);
  margin: 0 0 10px;
}

.tools__card p {
  margin: 0 0 20px;
  max-width: 90%;
}

.tools__link {
  margin-top: auto;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 15px;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
  padding: 10px 24px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.tools__card:hover .tools__link {
  background-color: var(--color-secondary);
  color: #fff;
}
</style>
