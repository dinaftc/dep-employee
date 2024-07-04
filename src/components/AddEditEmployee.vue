<template>
  <div class="p-4 w-full flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold mb-4">{{ isEdit ? 'Edit Employee' : 'Add Employee' }}</h1>
    <form @submit.prevent="handleSubmit" class=" bg-gray-100  rounded-md py-8 px-8">
      <div class="mb-4  w-56">
        <label class="block text-gray-700">Name</label>
        <input v-model="employee.name" class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4  w-56">
        <label class="block text-gray-700">Department</label>
        <input v-model="employee.department" class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ isEdit ? 'Update' : 'Add' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const employee = ref({ name: '', department: '' });
const isEdit = ref(false);


const fetchEmployee = () => {
  const employeeId = route.params.id;
  if (employeeId) {
    isEdit.value = true;
    const existingEmployee = store.getters['getEmployeeById'](parseInt(employeeId)); // Corrected getter name
    if (existingEmployee) {
      employee.value = { ...existingEmployee };
    }
  }
};

onMounted(fetchEmployee);

const handleSubmit = () => {
  if (isEdit.value) {
   
    store.dispatch('updateEmployee', { ...employee.value }); 
  } else {
   
    const newId = store.getters['getEmployees'].length + 1;
    const newEmployee = { id: newId, ...employee.value };
    store.dispatch('addEmployee', newEmployee); 
  }
  router.push('/employees');
};
</script>
