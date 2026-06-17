<template>
  <section class="profiles">
    <div class="profiles__title-wrapper">
      <h2 class="profiles__title">Profils recherchés</h2>
    </div>
    <div class="profiles__image-wrapper">
      <img
        src="~/assets/illustrations/images/home/image.jpg"
        alt="Équipe au travail"
        class="profiles__image"
      />
    </div>

      <div class="profiles__grid" v-if="!selectedProfile">
        <div
          class="profile-card"
          v-for="profile in profiles"
          :key="profile.id"
          @click="selectedId = profile.id"
        >
          <div class="profile-card__avatar">
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
          <div class="profile-card__body">
            <h3>{{ profile.title }}</h3>
            <dl class="profile-card__fiche">
              <div class="profile-card__row">
                <dt>Expérience</dt>
                <dd>{{ profile.experience }}</dd>
              </div>
              <div class="profile-card__row">
                <dt>Formation</dt>
                <dd>{{ profile.formation }}</dd>
              </div>
              <div class="profile-card__row">
                <dt>Qualités</dt>
                <dd>{{ profile.qualites }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="profiles__detail" v-else>
        <div class="profile-card profile-card--selected">
          <div class="profile-card__avatar">
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
          <div class="profile-card__body">
            <h3>{{ selectedProfile.title }}</h3>
            <dl class="profile-card__fiche">
              <div class="profile-card__row">
                <dt>Expérience</dt>
                <dd>{{ selectedProfile.experience }}</dd>
              </div>
              <div class="profile-card__row">
                <dt>Formation</dt>
                <dd>{{ selectedProfile.formation }}</dd>
              </div>
              <div class="profile-card__row">
                <dt>Qualités</dt>
                <dd>{{ selectedProfile.qualites }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="profile-detail">
          <button
            class="profile-detail__close"
            aria-label="Fermer"
            @click="selectedId = null"
          >
            ×
          </button>
          <h3>{{ selectedProfile.title }}</h3>
          <p>{{ selectedProfile.detail }}</p>
        </div>
      </div>
  </section>
</template>

<script setup>
const profiles = [
  {
    id: 1,
    title: "Profil 1",
    experience: "Lorem ipsum dolor sit amet",
    formation: "Consectetur adipiscing elit",
    qualites: "Sed do eiusmod tempor",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    title: "Profil 2",
    experience: "Lorem ipsum dolor sit amet",
    formation: "Consectetur adipiscing elit",
    qualites: "Sed do eiusmod tempor",
    detail:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    id: 3,
    title: "Profil 3",
    experience: "Lorem ipsum dolor sit amet",
    formation: "Consectetur adipiscing elit",
    qualites: "Sed do eiusmod tempor",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
  },
];

const selectedId = ref(null);
const selectedProfile = computed(() =>
  profiles.find((profile) => profile.id === selectedId.value),
);
</script>

<style scoped>
.profiles {
  position: relative;
  margin-top: 130px;
}

.profiles__image-wrapper {
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

.profiles__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profiles__title-wrapper {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.profiles__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.profiles__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.profile-card {
  position: relative;
  width: 250px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-card:hover {
  background-color: rgba(28, 177, 161, 0.05);
}

.profile-card--selected {
  cursor: default;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.profile-card--selected .profile-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-card--selected:hover {
  background-color: #fff;
}

.profile-card__avatar {
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

.profile-card__avatar svg {
  width: 40px;
  height: 40px;
}

.profile-card__body {
  padding: 55px 20px 25px;
  text-align: center;
}

.profile-card__body h3 {
  color: var(--color-primary);
  margin: 0 0 20px;
}

.profile-card__fiche {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-card__row {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.profile-card__row dt {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-primary);
}

.profile-card__row dd {
  margin: 2px 0 0;
  font-size: 14px;
}

.profiles__detail {
  display: flex;
  align-items: stretch;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 40px 100px;
}

.profile-detail {
  position: relative;
  flex: 1;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 10px;
  padding: 40px;
}

.profile-detail h3 {
  color: #fff;
  margin: 0 0 15px;
}

.profile-detail p {
  color: #fff;
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
}

.profile-detail__close {
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
