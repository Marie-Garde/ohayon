<template>
  <section class="hook">
    <div class="hook__title-wrapper">
      <h2 class="hook__title">Pourquoi nous rejoindre ?</h2>
    </div>
  </section>
</template>

<style scoped>
.hook {
  position: relative;
  padding: 50px 40px 30px;
}

.hook__title-wrapper {
  text-align: center;
  margin-bottom: 30px;
}

.hook__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .hook {
    padding: 40px 24px 24px;
  }

  .hook__title {
    font-size: 28px;
    padding: 12px 35px;
  }
}

@media (max-width: 480px) {
  .hook {
    padding: 32px 20px 20px;
  }

  .hook__title {
    font-size: 20px;
    padding: 10px 20px;
  }
}
</style>
