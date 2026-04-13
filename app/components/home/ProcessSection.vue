<template>
  <section class="process">
    <div class="process__header">
      <p class="process__subtitle">Premier contact ?</p>
      <h2 class="process__title">Comment ça se passe</h2>
    </div>

    <div class="timeline">
      <div class="timeline__track">
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Étape 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, orci eget viverra feugiat.</p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, orci eget viverra feugiat.</p>
            <h3>Étape 2</h3>
          </div>
        </div>
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Étape 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, orci eget viverra feugiat.</p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, orci eget viverra feugiat.</p>
            <h3>Étape 4</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background-color: var(--color-primary);
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.process__header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.process__subtitle {
  color: #fff;
  font-weight: 300;
  font-size: 25px;
  margin: 0 -40px 0 0;
}

.process__title {
  color: #fff;
  font-size: 45px;
  margin: 0;
}

.timeline {
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0;
}

.timeline__track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  min-height: 300px;
}

.timeline__track::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #fff;
  transform: translateY(-50%);
}

.timeline__track::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
}

.timeline__step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
}

.timeline__dot {
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  z-index: 1;
  flex-shrink: 0;
}

.timeline__step--top {
  justify-content: flex-end;
  padding-bottom: 150px;
}

.timeline__step--top .timeline__dot {
  bottom: 142px;
}

.timeline__step--top .timeline__content p {
  padding-bottom: 23px;
}

.timeline__step--bottom {
  justify-content: flex-start;
  padding-top: 150px;
}

.timeline__step--bottom .timeline__dot {
  top: 142px;
}

.timeline__step--bottom .timeline__content p {
  padding-top: 23px;
}

.timeline__content h3 {
  color: #fff;
  font-size: 22px;
  margin: 0 0 8px;
}

.timeline__content p {
  color: #fff;
  font-weight: 300;
  margin: 0;
  margin-left: 7px;
  border-left: 2px solid #fff;
  padding-left: 10px;
}

.timeline__step--bottom .timeline__content h3 {
  margin: 8px 0 0;
}
</style>
