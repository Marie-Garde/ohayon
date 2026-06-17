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
        <p class="associate-card__specialty">{{ associate.specialty }}</p>
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
        <p class="team-card__specialty">{{ member.specialty }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const associates = [
  {
    id: 1,
    name: "Associé 1",
    role: "Expert-comptable associé",
    specialty: "Fiscalité des groupes",
  },
  {
    id: 2,
    name: "Associé 2",
    role: "Expert-comptable associé",
    specialty: "Commissariat aux comptes",
  },
  {
    id: 3,
    name: "Associé 3",
    role: "Expert-comptable associée",
    specialty: "Accompagnement TPE-PME",
  },
  {
    id: 4,
    name: "Associé 4",
    role: "Expert-comptable associé",
    specialty: "Social & paie",
  },
];

const team = [
  { id: 1, name: "Collaborateur 1", role: "Comptable", specialty: "Tenue & révision" },
  { id: 2, name: "Collaborateur 2", role: "Comptable", specialty: "Tenue & révision" },
  { id: 3, name: "Collaborateur 3", role: "Gestionnaire de paie", specialty: "Social" },
  { id: 4, name: "Collaborateur 4", role: "Gestionnaire de paie", specialty: "Social" },
  { id: 5, name: "Collaborateur 5", role: "Assistant(e) comptable", specialty: "Saisie & rapprochements" },
  { id: 6, name: "Collaborateur 6", role: "Assistant(e) comptable", specialty: "Saisie & rapprochements" },
  { id: 7, name: "Collaborateur 7", role: "Assistant(e) administratif", specialty: "Accueil & secrétariat" },
  { id: 8, name: "Collaborateur 8", role: "Chargé(e) de mission", specialty: "Audit & conseil" },
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
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  max-width: 1100px;
  margin: 80px auto 80px;
  padding: 0 40px;
}

.associate-card {
  position: relative;
  flex: 1;
  max-width: 240px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 55px 20px 30px;
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
  margin: 0 0 4px;
}

.associate-card__specialty {
  font-size: 14px;
  margin: 0;
}

.team__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px 100px;
}

.team-card {
  position: relative;
  width: 170px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 40px 15px 20px;
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
  margin: 0 0 2px;
}

.team-card__specialty {
  font-size: 12px;
  margin: 0;
}
</style>
