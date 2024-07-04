<template>
  <div class="p-4 w-full flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold mb-4">Departments</h1>
    <table class="min-w-1/2 bg-white w-1/2">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="text-left py-3 px-4">ID</th>
          <th class="text-left py-3 px-4">Name</th>
          <th class="text-left py-3 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="department in departments" :key="department.id" class="border-bottom border">
          <td class="text-left py-3 px-4">{{ department.id }}</td>
          <td class="text-left py-3 px-4">{{ department.name }}</td>
          <td class="text-left py-3 px-4 flex gap-4">
            <router-link :to="`/edit-department/${department.id}`" class="bg-blue-500 text-white px-4 py-2 rounded">Edit</router-link>
            <button class="bg-red-500 text-white px-4 py-2 rounded" @click="deleteDepartment(department.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();


const departments = computed(() => store.getters.getDepartments);


const deleteDepartment = (id) => {

  store.dispatch('deleteDepartment', id);
};
</script>
