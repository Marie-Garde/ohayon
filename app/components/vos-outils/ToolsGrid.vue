<script setup>
import logoIsuite from "~/assets/illustrations/images/vos-outils/logo-isuite.png";
import logoPennylane from "~/assets/illustrations/images/vos-outils/logo-pennylane.png";
import logoSilae from "~/assets/illustrations/images/vos-outils/my-silae-white-64px.0at-9417.svg";

const tools = [
  {
    name: "ISuite",
    href: "https://portail.ohayon-associes.com/cnx/iSuiteExpert/Connexion",
    description: "Accès GED",
    logo: logoIsuite,
  },
  {
    name: "Pennylane",
    href: "https://app.pennylane.com/auth/login?",
    description: "Outil comptable et de gestion",
    logo: logoPennylane,
  },
  {
    name: "My Silae",
    href: "https://my.silae.fr/sign-in",
    description: "Outils RH et paye",
    logo: logoSilae,
  },
];
</script>

<template>
  <section class="tools">
    <div class="tools__grid">
      <a
        v-for="tool in tools"
        :key="tool.name"
        class="tools__card"
        v-reveal="'up'"
        :href="tool.href"
        target="_blank"
        rel="noopener"
      >
        <div class="tools__visual">
          <img
            class="tools__visual-bg"
            :src="tool.logo"
            alt=""
            aria-hidden="true"
          />
          <span class="tools__badge">
            <img class="tools__icon" :src="tool.logo" :alt="tool.name" />
          </span>
        </div>
        <div class="tools__content">
          <p>{{ tool.description }}</p>
          <span class="tools__link">Accéder à {{ tool.name }}</span>
        </div>
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
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.tools__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.tools__visual {
  position: relative;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-primary);
}

.tools__visual-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(16px) brightness(0.9);
  transform: scale(1.3);
}

.tools__badge {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tools__icon {
  max-width: 76px;
  max-height: 76px;
  object-fit: contain;
}

.tools__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  padding: 30px 25px 35px;
}

.tools__content p {
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

@media (max-width: 900px) {
  .tools__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .tools {
    padding: 80px 24px 90px;
  }
}

@media (max-width: 600px) {
  .tools__grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .tools {
    padding: 60px 20px 70px;
  }

  .tools__visual {
    height: 110px;
  }

  .tools__badge {
    width: 80px;
    height: 80px;
  }

  .tools__icon {
    max-width: 60px;
    max-height: 60px;
  }
}
</style>
