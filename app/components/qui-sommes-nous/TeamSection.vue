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

    <div class="team__associates" v-if="!selectedAssociate">
      <div
        class="associate-card"
        v-for="associate in associates"
        :key="associate.id"
        @click="selectedId = associate.id"
      >
        <div class="associate-card__avatar">
          <img
            :src="associate.photo"
            :alt="`${associate.firstName} ${associate.lastName}`"
          />
        </div>
        <div class="associate-card__body">
          <h3>{{ associate.firstName }}<br />{{ associate.lastName }}</h3>
          <p class="associate-card__role">{{ associate.role }}</p>
          <a
            v-if="associate.email"
            :href="`mailto:${associate.email}`"
            class="associate-card__email"
            @click.stop
          >
            {{ associate.email }}
          </a>
          <span class="associate-card__cta">En savoir plus</span>
        </div>
      </div>
    </div>

    <div class="team__detail" v-else>
      <div class="associate-card associate-card--selected">
        <div class="associate-card__avatar">
          <img
            :src="selectedAssociate.photo"
            :alt="`${selectedAssociate.firstName} ${selectedAssociate.lastName}`"
          />
        </div>
        <div class="associate-card__body">
          <h3>{{ selectedAssociate.firstName }}<br />{{ selectedAssociate.lastName }}</h3>
          <p class="associate-card__role">{{ selectedAssociate.role }}</p>
        </div>
      </div>

      <div class="associate-detail">
        <button
          class="associate-detail__close"
          aria-label="Fermer"
          @click="selectedId = null"
        >
          ×
        </button>
        <ul v-if="selectedAssociate.bullets.length" class="associate-detail__bullets">
          <li v-for="(bullet, i) in selectedAssociate.bullets" :key="i">{{ bullet }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import photoJerome from "~/assets/illustrations/images/qui-sommes-nous/Jérome.jpg";
import photoLaurence from "~/assets/illustrations/images/qui-sommes-nous/Laurence.jpg";
import photoMaryse from "~/assets/illustrations/images/qui-sommes-nous/Maryse.jpg";
import photoOceane from "~/assets/illustrations/images/qui-sommes-nous/Océane.jpg";

const associates = [
  {
    id: 1,
    firstName: "Jérôme",
    lastName: "Ohayon",
    role: "Associé, expert-comptable et commissaire aux comptes",
    photo: photoJerome,
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
    firstName: "Laurence",
    lastName: "Bertrand",
    role: "Associée, expert-comptable",
    photo: photoLaurence,
    bullets: [
      "Spécialiste de la paye - multi conventions.",
      "Auteur d'un mémoire en 1999 déposé en bibliothèque, publié aux éditions ECM (série des meilleurs mémoires de l'expertise-comptable) et récompensé deux fois par la profession au titre des meilleurs mémoires, au plan national puis régional.",
    ],
    email: "lb@ohayon-associes.com",
  },
  {
    id: 3,
    firstName: "Maryse",
    lastName: "Olhats",
    role: "Associée, expert-comptable",
    photo: photoMaryse,
    bullets: [
      "DESS Banque-Finance, 5 ans d'expérience en Gestion de Patrimoine dans le milieu bancaire.",
    ],
    email: "mo@ohayon-associes.com",
  },
  {
    id: 4,
    firstName: "Océane",
    lastName: "Ducoulombier",
    role: "Associée, expert-comptable",
    photo: photoOceane,
    bullets: [
      "Auteur d'un mémoire en 2020 déposé en bibliothèque, récompensé par la profession au titre des meilleurs mémoires.",
    ],
    email: "od@ohayon-associes.com",
  },
];

const selectedId = ref(null);
const selectedAssociate = computed(() =>
  associates.find((associate) => associate.id === selectedId.value),
);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 120px 40px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.associate-card {
  position: relative;
  width: 260px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.associate-card:hover {
  background-color: rgba(28, 177, 161, 0.05);
}

.associate-card--selected {
  cursor: default;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.associate-card--selected .associate-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.associate-card--selected:hover {
  background-color: #fff;
}

.associate-card__avatar {
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 4px solid #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.associate-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.4);
}

.associate-card__body {
  padding: 95px 25px 30px;
  text-align: center;
}

.associate-card__body h3 {
  min-height: 64px;
  color: var(--color-primary);
  margin: 0 0 8px;
}

.associate-card__role {
  min-height: 42px;
  font-weight: 700;
  margin: 0 0 14px;
}

.associate-card__email {
  display: block;
  margin: 0 0 20px;
  font-size: 14px;
  color: var(--color-secondary);
  text-decoration: none;
}

.associate-card__email:hover {
  text-decoration: underline;
}

.associate-card__cta {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 14px;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
  padding: 8px 20px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.associate-card:hover .associate-card__cta {
  background-color: var(--color-secondary);
  color: #fff;
}

.team__detail {
  display: flex;
  align-items: stretch;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.associate-detail {
  position: relative;
  flex: 1;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 10px;
  padding: 40px;
}

.associate-detail__bullets {
  list-style: disc;
  margin: 0 0 20px;
  padding-left: 20px;
  color: #fff;
}

.associate-detail__bullets li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.associate-detail__close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
}
</style>
