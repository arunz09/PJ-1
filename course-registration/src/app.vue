<template>
  <nav>
    <router-link to="/">Student View</router-link>
    <router-link to="/admin">Admin View</router-link>
  </nav>
  <router-view />
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  text-decoration: none;
  padding: 10px;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>