<template>
  <div>
    <h1>Student View</h1>
    <h2>Courses</h2>
    <ul>
      <li v-for="course in courses" :key="course.id">
        {{ course.name }} - {{ course.description }}
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const courses = ref([]);
const error = ref(null);

const fetchCourses = async () => {
  try {
    const response = await fetch('/api/courses');
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    courses.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(fetchCourses);
</script>

<style scoped>
h1, h2 {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.error {
  color: red;
  text-align: center;
}
</style>