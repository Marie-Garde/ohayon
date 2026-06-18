<template>
  <section class="team">
    <div class="team__title-wrapper">
      <h2 class="team__title">L'équipe</h2>
    </div>
    <div class="team__image-wrapper">
      <img
        src="~/assets/illustrations/images/home/image.jpg"
        alt="Équipe au travail"
        class="team__image"
      />
    </div>

    <div class="team__associates">
      <div class="associate-card" v-for="associate in associates" :key="associate.id">
        <div class="associate-card__avatar">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
          </svg>
        </div>
        <h3>{{ associate.name }}</h3>
        <p class="associate-card__role">{{ associate.role }}</p>
        <ul v-if="associate.bullets.length" class="associate-card__bullets">
          <li v-for="(bullet, i) in associate.bullets" :key="i">{{ bullet }}</li>
        </ul>
        <a
          v-if="associate.email"
          :href="`mailto:${associate.email}`"
          class="associate-card__email"
        >
          {{ associate.email }}
        </a>
      </div>
    </div>

    <div class="team__grid">
      <div class="team-card" v-for="member in team" :key="member.id">
        <div class="team-card__avatar">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
          </svg>
        </div>
        <h3>{{ member.name }}</h3>
        <p class="team-card__role">{{ member.role }}</p>
        <ul v-if="member.bullets.length" class="team-card__bullets">
          <li v-for="(bullet, i) in member.bullets" :key="i">{{ bullet }}</li>
        </ul>
        <a
          v-if="member.email"
          :href="`mailto:${member.email}`"
          class="team-card__email"
        >
          {{ member.email }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const associates = [
  {
    id: 1,
    name: "Jérôme Ohayon",
    role: "Associé, expert-comptable et commissaire aux comptes",
    bullets: [
      "Spécialiste en problématiques des groupes de sociétés.",
      "Diplômé de l'École Supérieure de Commerce de Bordeaux, titulaire d'un master Contrôle Comptabilité Audit.",
      "Professeur affilié à l'École Supérieure de Commerce de Toulouse.",
      "Intervenant en centre de gestion des professions libérales.",
      "Auteur d'un mémoire déposé en bibliothèque.",
    ],
    email: "jo@ohayon-associes.com",
  },
  {
    id: 2,
    name: "Laurence Bertrand",
    role: "Associée, expert-comptable",
    bullets: [
      "Spécialiste de la paye - multi conventions.",
      "Auteur d'un mémoire en 1999 déposé en bibliothèque, publié aux éditions ECM (série des meilleurs mémoires de l'expertise-comptable) et récompensé deux fois par la profession au titre des meilleurs mémoires, au plan national puis régional.",
    ],
    email: "lb@ohayon-associes.com",
  },
  {
    id: 3,
    name: "Maryse Olhats",
    role: "Associée, expert-comptable",
    bullets: [
      "DESS Banque-Finance, 5 ans d'expérience en Gestion de Patrimoine dans le milieu bancaire.",
    ],
    email: "mo@ohayon-associes.com",
  },
  {
    id: 4,
    name: "Océane Ducoulombier",
    role: "Associée, expert-comptable",
    bullets: [
      "Auteur d'un mémoire en 2020 déposé en bibliothèque, récompensé par la profession au titre des meilleurs mémoires.",
    ],
    email: "od@ohayon-associes.com",
  },
];

const team = [
  {
    id: 1,
    name: "Laurence",
    role: "Chef de mission",
    bullets: [
      "Titulaire du DESCF, Diplôme d'Études Supérieures Comptables et Financières.",
      "Expérience bancaire de 10 ans sur les produits financiers.",
      "Plus de 15 ans d'expérience en cabinet d'expertise comptable.",
    ],
    email: "lt@ohayon-associes.com",
  },
  {
    id: 2,
    name: "Maïlys",
    role: "Expert-comptable mémorialiste",
    bullets: [
      "Titulaire du DSCG.",
      "Plus de 10 ans d'expérience en cabinet d'expertise comptable.",
    ],
    email: "mg@ohayon-associes.com",
  },
  {
    id: 3,
    name: "Marilyne",
    role: "Collaboratrice comptable & fiscal",
    bullets: [
      "Plus de 10 ans d'expérience en cabinet d'expertise comptable.",
      "Titulaire d'une licence de mathématique.",
    ],
    email: "md@ohayon-associes.com",
  },
  {
    id: 4,
    name: "Arthur",
    role: "Expert-comptable mémorialiste",
    bullets: [
      "Titulaire du DSCG.",
      "Plus de 10 ans d'expérience en cabinet comptable.",
    ],
    email: "am@ohayon-associes.com",
  },
  {
    id: 5,
    name: "Pauline",
    role: "Collaboratrice comptable & fiscal",
    bullets: ["7 ans d'expérience en cabinet d'expertise comptable."],
    email: "pc@ohayon-associes.com",
  },
  {
    id: 6,
    name: "Elise",
    role: "Expert-comptable stagiaire",
    bullets: [
      "Titulaire du DSCG.",
      "3 ans d'expérience en cabinet d'expertise comptable.",
    ],
    email: "eca@ohayon-associes.com",
  },
  {
    id: 7,
    name: "Johanna",
    role: "À compléter",
    bullets: [],
    email: null,
  },
  {
    id: 8,
    name: "Hourya",
    role: "À compléter",
    bullets: [],
    email: null,
  },
];
</script>

<style scoped>
.team {
  position: relative;
  margin-top: 130px;
}

.team__image-wrapper {
  width: 100%;
  height: 350px;
  overflow: hidden;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.team__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team__title-wrapper {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.team__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.team__associates {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 40px;
  max-width: 900px;
  margin: 80px auto 80px;
  padding: 0 40px;
}

.associate-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 55px 30px 30px;
  text-align: center;
}

.associate-card__avatar {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 4px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.associate-card__avatar svg {
  width: 40px;
  height: 40px;
}

.associate-card h3 {
  color: var(--color-primary);
  margin: 0 0 8px;
}

.associate-card__role {
  font-weight: 700;
  margin: 0 0 14px;
}

.associate-card__bullets {
  list-style: disc;
  text-align: left;
  margin: 0 0 16px;
  padding-left: 20px;
}

.associate-card__bullets li {
  font-size: 14px;
  margin-bottom: 6px;
}

.associate-card__email {
  margin-top: auto;
  font-size: 14px;
  color: var(--color-secondary);
  text-decoration: none;
}

.associate-card__email:hover {
  text-decoration: underline;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 30px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px 100px;
}

.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 40px 20px 20px;
  text-align: center;
}

.team-card__avatar {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-card__avatar svg {
  width: 30px;
  height: 30px;
}

.team-card h3 {
  font-size: 17px;
  margin: 0 0 4px;
}

.team-card__role {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 10px;
}

.team-card__bullets {
  list-style: disc;
  text-align: left;
  margin: 0 0 12px;
  padding-left: 18px;
}

.team-card__bullets li {
  font-size: 12px;
  margin-bottom: 4px;
}

.team-card__email {
  margin-top: auto;
  font-size: 12px;
  color: var(--color-secondary);
  text-decoration: none;
}

.team-card__email:hover {
  text-decoration: underline;
}
</style>
