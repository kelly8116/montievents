<template>
  <router-link to="/" id="logo" class="col">
    <img src="/static/images/logo-montievents.svg">
  </router-link>
</template>

<script>
export default {
  name: 'LogoSvg'
}
</script>

<style scoped>
#logo {
  position: relative;
}
img {
  min-width: 130px;
  width: 150px;
}
@media screen and (min-width: 768px) {
  img {
    width: 220px;
  }
}
</style>
