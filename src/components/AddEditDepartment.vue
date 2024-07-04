<template>
  <div class=" w-full flex justify-center items-center flex-col my-20">
    <h1 class="text-2xl font-bold mb-4">{{ isEdit ? 'Edit Department' : 'Add Department' }}</h1>
    <form @submit.prevent="handleSubmit" class="bg-gray-100  rounded-md py-8 px-8">
      <div class=" w-52 mb-4">
        <label class="block text-gray-700 mb-2">Name</label>
        <input v-model="department.name" class="w-full p-2 border border-gray-300 rounded" />
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

const department = ref({ name: '' });
const isEdit = ref(false);


const fetchDepartment = () => {
  const departmentId = route.params.id;
  if (departmentId) {
    isEdit.value = true;
    const existingDepartment = store.getters['getDepartmentById'](parseInt(departmentId));
    if (existingDepartment) {
      department.value = { ...existingDepartment };
    }
  }
};

onMounted(fetchDepartment);

const handleSubmit = () => {
  if (isEdit.value) {
   
    store.dispatch('updateDepartment', { ...department.value });
  } else {

    const newId = store.getters['getDepartments'].length + 1;
    const newDepartment = { id: newId, ...department.value };
    store.dispatch('addDepartment', newDepartment);
  }
  router.push('/');
};
</script>
