<template>
  <section class="reasons">
    <div class="reasons__grid">
      <div class="reasons__card" v-reveal="'left'">
        <h3>Un cabinet<br />moderne</h3>
        <p>
          Évoluez dans un cabinet moderne où vos idées et votre autonomie
          sont valorisées au quotidien.
        </p>
      </div>
      <div class="reasons__card" v-reveal="'up'">
        <h3>Votre progression compte</h3>
        <p>
          Ici, votre progression compte autant que vos compétences
          techniques.
        </p>
      </div>
      <div class="reasons__card reasons__card--stats" v-reveal="'right'">
        <h3>Une équipe expérimentée</h3>
        <div class="reasons__stats">
          <div class="reasons__stat">
            <span class="reasons__stat-number">40</span>
            <span class="reasons__stat-label">ans d'expérience</span>
          </div>
          <div class="reasons__stat">
            <span class="reasons__stat-number">4</span>
            <span class="reasons__stat-label">experts-comptables</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reasons {
  padding: 0 40px 40px;
}

.reasons__grid {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
}

.reasons__card {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 40px 30px;
  text-align: center;
  width: calc((100% - 100px) / 3);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.reasons__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.reasons__card h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.reasons__card p {
  margin: 0;
}

.reasons__stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
}

.reasons__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reasons__stat-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 48px;
  color: var(--color-secondary);
  line-height: 1;
}

.reasons__stat-label {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 13px;
  color: var(--color-text);
  margin-top: 5px;
}

@media (max-width: 900px) {
  .reasons__grid {
    flex-wrap: wrap;
  }

  .reasons__card {
    width: calc(50% - 25px);
  }
}

@media (max-width: 650px) {
  .reasons__grid {
    flex-direction: column;
    align-items: center;
  }

  .reasons__card {
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .reasons {
    padding: 0 20px 30px;
  }

  .reasons__card {
    padding: 30px 20px;
  }

  .reasons__stat-number {
    font-size: 38px;
  }
}
</style>
