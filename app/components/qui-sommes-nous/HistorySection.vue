<template>
  <section class="history">
    <div class="history__title-wrapper">
      <h2 class="history__title">Notre histoire</h2>
    </div>

    <div class="history__timeline">
      <div class="history__item" v-reveal="'left'">
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">1985</span>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tincidunt, orci eget viverra feugiat.
          </p>
        </div>
      </div>
      <div class="history__item" v-reveal="'right'">
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">1998</span>
          <h3>Consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tincidunt, orci eget viverra feugiat.
          </p>
        </div>
      </div>
      <div class="history__item" v-reveal="'left'">
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">2010</span>
          <h3>Sed do eiusmod tempor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tincidunt, orci eget viverra feugiat.
          </p>
        </div>
      </div>
      <div class="history__item" v-reveal="'right'">
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">2018</span>
          <h3>Incididunt ut labore</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tincidunt, orci eget viverra feugiat.
          </p>
        </div>
      </div>
      <div class="history__item" v-reveal="'left'">
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">2024</span>
          <h3>Ut enim ad minim veniam</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tincidunt, orci eget viverra feugiat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  padding: 100px 40px 0;
}

.history__title-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.history__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
}

.history__timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.history__timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--color-primary);
  transform: translateX(-50%);
}

.history__item {
  position: relative;
  width: 50%;
  padding-bottom: 60px;
}

.history__item:last-child {
  padding-bottom: 0;
}

.history__item:nth-child(odd) {
  text-align: right;
  padding-right: 50px;
}

.history__item:nth-child(even) {
  left: 50%;
  text-align: left;
  padding-left: 50px;
}

.history__dot {
  position: absolute;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  border: 3px solid var(--color-primary);
}

.history__item:nth-child(odd) .history__dot {
  right: -8px;
}

.history__item:nth-child(even) .history__dot {
  left: -8px;
}

.history__year {
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-secondary);
}

.history__content h3 {
  color: var(--color-primary);
  margin: 8px 0;
}

.history__content p {
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 700px) {
  .history__timeline::before {
    left: 8px;
  }

  .history__item,
  .history__item:nth-child(even) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 35px;
    padding-right: 0;
  }

  .history__item:nth-child(odd) .history__dot,
  .history__item:nth-child(even) .history__dot {
    left: 0;
    right: auto;
  }
}

@media (max-width: 768px) {
  .history {
    padding: 70px 24px 0;
  }

  .history__title-wrapper {
    margin-bottom: 40px;
  }

  .history__title {
    font-size: 28px;
    padding: 12px 32px;
  }
}

@media (max-width: 480px) {
  .history {
    padding: 50px 20px 0;
  }

  .history__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>
