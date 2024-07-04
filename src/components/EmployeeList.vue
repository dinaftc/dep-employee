<template>
  <div class="p-4   w-full flex justify-center items-center flex-col">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Employees</h1>
    <div class="overflow-x-auto bg-white rounded-lg ">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Department
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id" class="hover:bg-gray-50">
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {{ employee.id }}
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {{ employee.name }}
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {{ employee.department }}
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2">
              <router-link :to="`/employees/${employee.id}`" class="bg-gray-300 text-black px-4 py-2 rounded hover:bg-blue-600">View</router-link>
             
              <router-link :to="`/edit-employee/${employee.id}`" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</router-link>
              <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" @click="deleteEmployee(employee.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import { useStore } from 'vuex';

const store = useStore();


const employees = ref(store.getters.getEmployees); 

const deleteEmployee = (id) => {
 store.dispatch('deleteEmployee', id);
};

</script>
