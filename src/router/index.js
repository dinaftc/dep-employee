import { createRouter, createWebHistory } from 'vue-router';
import EmployeeList from '../components/EmployeeList.vue';
import DepartmentList from '../components/DepartmentList.vue';
import EmployeeDetails from '../components/EmployeeDetails.vue';
import AddEditEmployee from '../components/AddEditEmployee.vue';
import AddEditDepartment from '../components/AddEditDepartment.vue';

const routes = [
  { path: '/employees', component: EmployeeList },
  { path: '/', component: DepartmentList },
  { path: '/employees/:id', component: EmployeeDetails },
  { path: '/add-employee', component: AddEditEmployee },
  { path: '/edit-employee/:id', component: AddEditEmployee },
  { path: '/add-department', component: AddEditDepartment },
  { path: '/edit-department/:id', component: AddEditDepartment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
