<template>
  <section class="team">
    <div class="team__title-wrapper">
      <h2 class="team__title">{{ teamTitre }}</h2>
    </div>
    <div class="team__image-wrapper" :class="{ 'img-loader-bg': loading }">
      <img
        v-if="teamImage"
        :src="teamImage"
        :alt="teamAlt"
        class="team__image"
        loading="lazy"
      />
    </div>

    <div class="team__intro" v-reveal="'up'">
      <span class="team__intro-bar"></span>
      <p v-if="introHtml" v-html="introHtml"></p>
      <p v-else>
        Chez Ohayon & Associés, nous croyons qu'un cabinet d'expertise
        comptable se juge avant tout par la qualité de la relation humaine
        qu'il construit avec ses clients. Voici les quatre associés qui
        pilotent le cabinet et vous accompagnent avec rigueur, écoute et
        proximité à chaque étape de la vie de votre entreprise.
        <strong>
          Et ils ne sont pas seuls : toute une équipe de collaborateurs
          dévoués travaille chaque jour à leurs côtés pour faire avancer vos
          projets.
        </strong>
      </p>
      <span class="team__intro-bar"></span>
    </div>

    <div class="team__associates" v-if="!selectedAssociate">
      <div
        class="associate-card"
        v-for="associate in associates"
        :key="associate.id"
        v-reveal="'up'"
        @click="selectedId = associate.id"
      >
        <div class="associate-card__avatar">
          <img
            :src="associate.photo"
            :alt="`${associate.firstName} ${associate.lastName}`"
            loading="lazy"
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
        <div ref="selectedCardEl" class="associate-card__avatar">
          <img
            :src="selectedAssociate.photo"
            :alt="`${selectedAssociate.firstName} ${selectedAssociate.lastName}`"
            loading="lazy"
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

        <div class="associate-detail__likes">
          <div class="associate-detail__like-row">
            <span class="associate-detail__like-icon associate-detail__like-icon--yes">✓</span>
            <p>
              <strong>J'aime</strong>
              {{ selectedAssociate.likes }}
            </p>
          </div>
          <div class="associate-detail__like-row">
            <span class="associate-detail__like-icon associate-detail__like-icon--no">✕</span>
            <p>
              <strong>J'aime pas</strong>
              {{ selectedAssociate.dislikes }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import photoJerome from "~/assets/illustrations/images/qui-sommes-nous/Jérome.jpg";
import photoLaurence from "~/assets/illustrations/images/qui-sommes-nous/Laurence.jpg";
import photoMaryse from "~/assets/illustrations/images/qui-sommes-nous/Maryse.jpg";
import photoOceane from "~/assets/illustrations/images/qui-sommes-nous/Océane.jpg";
const defaultAssociates = [
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
    likes:
      "les entrepreneurs qui ont de grandes ambitions et les tableaux de bord qui tiennent sur une page.",
    dislikes:
      "les usines à gaz et les phrases qui commencent par « normalement, ça devait marcher ».",
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
    likes:
      "l'automatisation, la digitalisation, et simplifier la vie des entreprises. Les échanges, expliquer, et donner du sens aux textes et aux actes.",
    dislikes: "les papiers, ni le Moyen Âge. Ni les enquêtes de la DARES.",
    email: "lb@ohayon-associes.com",
  },
  {
    id: 3,
    firstName: "Maryse",
    lastName: "Olhats",
    role: "Associée, expert-comptable",
    photo: photoMaryse,
    bullets: [
      "DESS Banque-Finance, 5 ans d'expérience en Gestion de Patrimoine dans le secteur bancaire.",
      "15 ans d'expérience en cabinet d'expertise comptable.",
      "Accompagnement des dirigeants de TPE, PME et professions libérales.",
    ],
    likes:
      "rendre la comptabilité utile, transformer les chiffres en décisions et les obligations comptables en véritable outil de pilotage.",
    dislikes:
      "les approximations, les « ça prendra cinq minutes » qui en prennent finalement cinquante, et les surprises… sauf à mon anniversaire.",
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
    likes:
      "découvrir de nouvelles histoires d'entrepreneurs passionnés par leur métier, accompagner mes clients dans leur quotidien et rendre les chiffres compréhensibles.",
    dislikes:
      "la complexité quand on peut faire simple et le café froid oublié entre deux dossiers.",
    email: "od@ohayon-associes.com",
  },
];

const { data } = useQuiSommesNousContent();
const img = useSanityImageUrl();

const associates = computed(() => {
  const sanity = data.value?.associes;
  if (sanity?.length) {
    return sanity.map((associe, index) => ({
      id: associe._key ?? index,
      firstName: associe.prenom,
      lastName: associe.nom,
      role: associe.role,
      photo: img(associe.photo)?.url() ?? defaultAssociates[index]?.photo ?? "",
      email: associe.email,
      bullets: associe.parcours ?? [],
      likes: associe.aime,
      dislikes: associe.aimePas,
    }));
  }
  return defaultAssociates;
});

const loading = computed(() => !data.value);
const teamTitre = computed(() => data.value?.equipeTitre || "L'équipe");
const teamImage = computed(() => img(data.value?.equipeImage)?.url() || "");
const teamAlt = computed(() => data.value?.equipeImage?.alt || "Équipe au travail");
const introHtml = computed(() => richTextToHtml(data.value?.equipeIntro));

const selectedId = ref(null);
const selectedAssociate = computed(() =>
  associates.value.find((associate) => associate.id === selectedId.value),
);

const selectedCardEl = ref(null);

watch(selectedId, async (id) => {
  if (id !== null) {
    await nextTick();
    const el = selectedCardEl.value;
    if (!el) return;
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight ?? 0;
    const rect = el.getBoundingClientRect();
    window.scrollBy({ top: rect.top - navbarHeight, behavior: "smooth" });
  }
});
</script>

<style scoped>
.team {
  position: relative;
  margin-top: 100px;
}

.team__image-wrapper {
  width: 100%;
  height: 450px;
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
  object-position: center 30%;
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

.team__intro {
  max-width: 1180px;
  margin: 60px auto 60px;
  padding: 0 40px;
  text-align: center;
}

.team__intro-bar {
  display: inline-block;
  width: 50px;
  height: 3px;
  background-color: var(--color-secondary);
  border-radius: 2px;
  margin: 0 0 20px;
}

.team__intro p {
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0 0 24px;
}

.team__intro :deep(strong) {
  font-weight: 700;
  color: var(--color-primary);
}

.team__associates {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 120px 40px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.associate-card {
  position: relative;
  width: 245px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.associate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
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
  transform: none;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
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
  box-shadow: 0 6px 14px rgba(28, 80, 177, 0.18);
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
  min-height: 63px;
  font-weight: 700;
  margin: 0 0 14px;
}

.associate-card__email {
  display: block;
  margin: 0 0 20px;
  font-size: 14px;
  color: var(--color-primary);
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
  max-width: 1180px;
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

.associate-detail__likes {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.associate-detail__like-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.associate-detail__like-row p {
  color: #fff;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
}

.associate-detail__like-row strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.85;
  margin-bottom: 2px;
}

.associate-detail__like-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
  margin-top: 2px;
}

.associate-detail__like-icon--yes {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.associate-detail__like-icon--no {
  background-color: rgba(255, 191, 0, 0.2);
  color: var(--color-secondary);
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

@media (max-width: 768px) {
  .team {
    margin-top: 60px;
  }

  .team__image-wrapper {
    height: 320px;
  }

  .team__title {
    font-size: 28px;
    padding: 12px 32px;
  }

  .team__associates {
    gap: 100px 24px;
    padding: 70px 24px 80px;
  }

  .associate-card {
    width: 100%;
  }

  .team__detail {
    flex-direction: column;
    padding: 80px 24px 60px;
    gap: 24px;
  }

  .associate-card--selected {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .team__image-wrapper {
    height: 260px;
  }

  .team__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>
