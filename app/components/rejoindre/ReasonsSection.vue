<template>
  <section class="reasons">
    <div class="reasons__grid">
      <div class="reasons__card">
        <h3>Raison 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="reasons__card">
        <h3>Raison 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="reasons__card">
        <h3>Raison 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="reasons__card">
        <h3>Raison 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reasons {
  padding: 0 40px 80px;
}

.reasons__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

.reasons__card {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 30px 20px;
  text-align: center;
  width: 350px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reasons__card h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.reasons__card p {
  margin: 0;
}
</style>
