<template>
  <section class="jobs">
    <div class="jobs__banner">
      <div class="jobs__image-wrapper">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/offres.jpg"
          alt="Équipe au travail"
          class="jobs__image"
        />
      </div>
      <div class="jobs__title-wrapper">
        <h2 class="jobs__title">Offres d'emploi</h2>
      </div>
    </div>

    <template v-if="!selectedJob">
      <div class="jobs__grid" v-if="jobs.length">
        <div
          class="job-card"
          v-for="job in paginatedJobs"
          :key="job.id"
          @click="selectedId = job.id"
        >
          <div class="job-card__avatar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M3 12h18" />
            </svg>
          </div>
          <div class="job-card__body">
            <div class="job-card__title-row">
              <h3>{{ job.title }}</h3>
              <span class="job-card__badge">{{ job.contract }}</span>
            </div>
            <p class="job-card__location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21Z"
                />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {{ job.location }}
            </p>
          </div>
          <span class="job-card__chevron" aria-hidden="true">›</span>
        </div>
      </div>

      <div class="jobs__empty" v-else>
        <p>
          Pas d'offre d'emploi actuellement, n'hésitez pas à nous envoyer
          une candidature spontanée.
        </p>
        <a
          class="jobs__empty-btn"
          href="mailto:nousrejoindre@ohayon-associes.com?subject=Candidature spontanée"
        >
          Envoyer une candidature spontanée
        </a>
      </div>

      <div class="jobs__pagination" v-if="totalPages > 1">
        <button
          class="jobs__page-btn"
          :disabled="page === 1"
          @click="page--"
          aria-label="Page précédente"
        >
          ‹
        </button>
        <span class="jobs__page-indicator">Page {{ page }} / {{ totalPages }}</span>
        <button
          class="jobs__page-btn"
          :disabled="page === totalPages"
          @click="page++"
          aria-label="Page suivante"
        >
          ›
        </button>
      </div>
    </template>

    <div class="jobs__detail" v-else>
      <div class="job-card job-card--selected">
        <div class="job-card__avatar">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
          </svg>
        </div>
        <div class="job-card__body">
          <div class="job-card__title-row">
            <h3>{{ selectedJob.title }}</h3>
            <span class="job-card__badge">{{ selectedJob.contract }}</span>
          </div>
          <p class="job-card__location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21Z"
              />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {{ selectedJob.location }}
          </p>
        </div>
      </div>

      <div class="job-detail">
        <button
          class="job-detail__close"
          aria-label="Fermer"
          @click="selectedId = null"
        >
          ×
        </button>
        <h3>{{ selectedJob.title }}</h3>
        <p>{{ selectedJob.detail }}</p>
        <a
          class="job-detail__btn"
          :href="`mailto:nousrejoindre@ohayon-associes.com?subject=Candidature - ${selectedJob.title}`"
        >
          Postuler à cette offre
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    id: 1,
    title: "Collaborateur comptable confirmé",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Au sein d'une équipe à taille humaine, vous gérez en autonomie un portefeuille clients varié (TPE/PME) : tenue, révision, déclarations fiscales et bilans. Vous êtes l'interlocuteur privilégié de vos clients et participez aux missions de conseil.",
  },
  {
    id: 2,
    title: "Assistant comptable",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous assistez les collaborateurs comptables dans la saisie, le rapprochement bancaire et la préparation des déclarations de TVA. Une belle opportunité pour monter en compétences au contact d'une équipe expérimentée.",
  },
  {
    id: 3,
    title: "Collaborateur social",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous prenez en charge la gestion de la paie et l'administration du personnel pour un portefeuille de clients dédié : bulletins de paie, déclarations sociales, contrats de travail et conseil social de premier niveau.",
  },
  {
    id: 4,
    title: "Auditeur junior",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Intégré à l'équipe d'audit légal, vous participez aux missions de commissariat aux comptes : contrôles, tests de procédures et rédaction de rapports, sous la supervision d'un chef de mission.",
  },
  {
    id: 5,
    title: "Stagiaire comptabilité",
    contract: "Stage",
    location: "Toulouse",
    detail:
      "Stage de 2 à 6 mois au sein de notre pôle comptable : découverte de la saisie comptable, des rapprochements bancaires et des bases de la fiscalité, encadré par un collaborateur confirmé.",
  },
  {
    id: 6,
    title: "Alternant expertise comptable",
    contract: "Alternance",
    location: "Toulouse",
    detail:
      "Dans le cadre de votre BTS, DCG ou DSCG, vous êtes formé aux missions de révision comptable et de fiscalité au sein d'une équipe qui vous accompagne tout au long de votre parcours.",
  },
  {
    id: 7,
    title: "Chef de mission comptable",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous encadrez une équipe de collaborateurs et supervisez un portefeuille de dossiers à forts enjeux. Vous êtes garant de la qualité des missions et accompagnez vos clients dans leurs décisions stratégiques.",
  },
  {
    id: 8,
    title: "Gestionnaire de paie",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous établissez les bulletins de paie et les déclarations sociales pour un portefeuille multi-conventions, en lien direct avec les clients et les organismes sociaux.",
  },
  {
    id: 9,
    title: "Collaborateur juridique",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous prenez en charge le secrétariat juridique courant de nos clients (assemblées générales, formalités, suivi des statuts) et participez à des missions de conseil ponctuelles.",
  },
  {
    id: 10,
    title: "Assistant administratif",
    contract: "CDI",
    location: "Toulouse",
    detail:
      "Vous assurez l'accueil physique et téléphonique du cabinet, la gestion du courrier et des fournitures, ainsi qu'un appui administratif aux différents pôles métiers.",
  },
];

const perPage = 6;
const page = ref(1);
const totalPages = computed(() => Math.ceil(jobs.length / perPage));
const paginatedJobs = computed(() =>
  jobs.slice((page.value - 1) * perPage, page.value * perPage),
);

const selectedId = ref(null);
const selectedJob = computed(() =>
  jobs.find((job) => job.id === selectedId.value),
);
</script>

<style scoped>
.jobs {
  position: relative;
  margin-top: 100px;
}

.jobs__banner {
  position: relative;
}

.jobs__image-wrapper {
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

.jobs__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.jobs__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.jobs__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.jobs__grid {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 40px 40px;
}

.job-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 25px;
  width: 100%;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.job-card:hover {
  background-color: rgba(28, 177, 161, 0.05);
}

.job-card--selected {
  cursor: default;
  flex-shrink: 0;
  flex-direction: column;
  width: 250px;
  padding: 55px 20px 25px;
}

.job-card--selected .job-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.job-card--selected:hover {
  background-color: #fff;
}

.job-card__avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.job-card__avatar svg {
  width: 26px;
  height: 26px;
}

.job-card--selected .job-card__avatar {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  border: 4px solid #fff;
}

.job-card--selected .job-card__avatar svg {
  width: 38px;
  height: 38px;
}

.job-card__body {
  flex: 1;
  text-align: left;
}

.job-card__title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 8px;
}

.job-card--selected .job-card__title-row {
  flex-direction: column;
  gap: 8px;
  margin: 0 0 20px;
}

.job-card__title-row h3 {
  color: var(--color-primary);
  font-size: 17px;
  margin: 0;
}

.job-card--selected .job-card__title-row h3 {
  font-size: 18px;
}

.job-card__badge {
  flex-shrink: 0;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-primary);
  background-color: rgba(28, 177, 161, 0.1);
  border-radius: 999px;
  padding: 4px 12px;
}

.job-card--selected .job-card__badge {
  color: #fff;
  background-color: var(--color-primary);
  border: 1.5px solid #fff;
}

.job-card__location {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 14px;
  color: var(--color-text);
}

.job-card--selected .job-card__location {
  justify-content: center;
}

.job-card__location svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  color: var(--color-primary);
}

.job-card__chevron {
  flex-shrink: 0;
  font-size: 22px;
  color: var(--color-primary);
}

.jobs__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  text-align: center;
}

.jobs__empty p {
  margin: 0;
  font-weight: 300;
  font-size: 17px;
  color: var(--color-text);
}

.jobs__empty-btn {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  color: var(--color-primary);
  background-color: #fff;
  border-radius: 5px;
  padding: 12px 22px;
  text-decoration: none;
  border: 2px solid var(--color-primary);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.jobs__empty-btn:hover {
  background-color: var(--color-primary);
  color: #fff;
}

.jobs__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 40px 100px;
}

.jobs__page-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background-color: #fff;
  color: var(--color-primary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.jobs__page-btn:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: #fff;
}

.jobs__page-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.jobs__page-indicator {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text);
}

.jobs__detail {
  display: flex;
  align-items: stretch;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.job-detail {
  position: relative;
  flex: 1;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.job-detail h3 {
  color: #fff;
  margin: 0 0 15px;
}

.job-detail p {
  color: #fff;
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
}

.job-detail__close {
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

.job-detail__btn {
  align-self: flex-start;
  margin-top: 25px;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  color: var(--color-primary);
  background-color: #fff;
  border-radius: 5px;
  padding: 12px 22px;
  text-decoration: none;
  border: 2px solid transparent;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.job-detail__btn:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: #fff;
}

@media (max-width: 768px) {
  .jobs {
    margin-top: 70px;
  }

  .jobs__image-wrapper {
    height: 320px;
  }

  .jobs__title {
    font-size: 26px;
    padding: 12px 32px;
  }

  .jobs__grid {
    padding: 60px 24px 30px;
  }

  .job-card {
    padding: 16px 18px;
    gap: 16px;
  }

  .job-card__avatar {
    width: 48px;
    height: 48px;
  }

  .job-card__avatar svg {
    width: 22px;
    height: 22px;
  }

  .job-card__title-row h3 {
    font-size: 16px;
  }

  .jobs__empty {
    padding: 60px 24px 30px;
  }

  .jobs__pagination {
    padding: 0 24px 70px;
  }

  .jobs__detail {
    flex-direction: column;
    gap: 30px;
    padding: 60px 24px 70px;
  }

  .job-card--selected {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .jobs__image-wrapper {
    height: 260px;
  }

  .jobs__title {
    font-size: 18px;
    padding: 10px 20px;
  }

  .job-card {
    padding: 14px 16px;
    gap: 12px;
  }

  .job-card__avatar {
    width: 44px;
    height: 44px;
  }

  .job-card__avatar svg {
    width: 20px;
    height: 20px;
  }

  .job-card__title-row {
    flex-wrap: wrap;
    gap: 8px;
  }

  .job-card__title-row h3 {
    font-size: 15px;
  }

  .job-card__badge {
    font-size: 10px;
    padding: 3px 10px;
  }

  .job-card__location {
    font-size: 13px;
  }

  .job-card__chevron {
    display: none;
  }

  .jobs__empty {
    padding: 50px 20px 24px;
  }

  .jobs__empty p {
    font-size: 15px;
  }

  .jobs__pagination {
    padding: 0 20px 60px;
  }

  .jobs__detail {
    padding: 50px 20px 60px;
  }

  .job-detail {
    padding: 28px;
  }
}
</style>
