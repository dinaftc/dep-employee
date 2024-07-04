import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      employees: [
        { id: 1, name: 'melissa', department: 'Departement 1' },
        { id: 2, name: 'yasmine', department: 'Departement 2' },
        
      ],
      departments: [
        { id: 1, name: 'Departement 1' },
        { id: 2, name: 'Departement 2' },
       
      ]
    };
  },
  mutations: {
 
    updateEmployee(state, updatedEmployee) {
      const index = state.employees.findIndex(emp => emp.id === updatedEmployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1, updatedEmployee);
      }
    },
    addEmployee(state, newEmployee) {
      state.employees.push(newEmployee);
    },
    deleteEmployee(state, id) {
      const index = state.employees.findIndex(emp => emp.id === id);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },

   
    updateDepartment(state, updatedDepartment) {
      const index = state.departments.findIndex(dep => dep.id === updatedDepartment.id);
      if (index !== -1) {
        state.departments.splice(index, 1, updatedDepartment);
      }
    },
    addDepartment(state, newDepartment) {
      state.departments.push(newDepartment);
    },
    deleteDepartment(state, id) {
      const index = state.departments.findIndex(dep => dep.id === id);
      if (index !== -1) {
        state.departments.splice(index, 1);
      }
    }
  },
  actions: {
  
    updateEmployee({ commit }, updatedEmployee) {
      commit('updateEmployee', updatedEmployee);
    },
    addEmployee({ commit }, newEmployee) {
      commit('addEmployee', newEmployee);
    },
    deleteEmployee({ commit }, id) {
      commit('deleteEmployee', id);
    },


    updateDepartment({ commit }, updatedDepartment) {
      commit('updateDepartment', updatedDepartment);
    },
    addDepartment({ commit }, newDepartment) {
      commit('addDepartment', newDepartment);
    },
    deleteDepartment({ commit }, id) {
      commit('deleteDepartment', id);
    }
  },
  getters: {
  
    getEmployees(state) {
      return state.employees;
    },
    getEmployeeById: (state) => (id) => {
      return state.employees.find(emp => emp.id === id);
    },

   
    getDepartments(state) {
      return state.departments;
    },
    getDepartmentById: (state) => (id) => {
      return state.departments.find(dep => dep.id === id);
    }
  }
});

export default store;
