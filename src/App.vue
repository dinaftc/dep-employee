<template>
  <div id="app">
    <nav class=" px-20 flex justify-between items-center  h-16 bg-gray-800 p-4 text-white">
      <router-link to="/" class="mr-4">Departments</router-link>
      <router-link to="/employees" class="mr-4">Employees</router-link>
     
      <router-link to="/add-employee" class="mr-4">Add Employee</router-link>
      <router-link to="/add-department" class="mr-4">Add Department</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
</style>
