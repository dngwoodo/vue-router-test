<template>
  <div class="home">
    <h1>Welcome to Your Vue.js App</h1>
    <p>pathname: {{ path }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: this.$route.path,
    };
  },
};
</script>
