<template>
  <div class="p-4 w-full flex justify-center items-center flex-col">
    <h1 class="text-2xl font-bold mb-4">Employee Details</h1>
    <div v-if="employee" class="bg-gray-100 rounded-md py-8 px-8 w-1/4">
      <p><strong>ID:</strong> {{ employee.id }}</p>
      <p><strong>Name:</strong> {{ employee.name }}</p>
      <p><strong>Department:</strong> {{ employee.department }}</p>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const employee = ref(null);

onMounted(() => {
  const employeeId = parseInt(route.params.id);
  employee.value = store.getters.getEmployeeById(employeeId);
});
</script>

