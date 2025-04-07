<template>
  <div>
    <h1>Admin View</h1>
    <h2>Registered Students</h2>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} (Reg: {{ student.reg_number }})
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const students = ref([]);
const error = ref(null);

const fetchStudents = async () => {
  try {
    const response = await fetch('/api/admin/students');
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    students.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(fetchStudents);
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