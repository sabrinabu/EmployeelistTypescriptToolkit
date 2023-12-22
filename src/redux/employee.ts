import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EmployeeList = {
  id: string | number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string | number;
  age: string | number;
  dob: string | number;
  salary: string | number;
  address: string;
};

export type Employee = {
  id: string | number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string | number;
  age: string | number;
  dob: string | number;
  salary: string | number;
  address: string;
};

type EmployeeListState = {
  employees: EmployeeList[];
};
const initialState: EmployeeListState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push({
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        contactNumber: action.payload.contactNumber,
        dob: action.payload.dob,
        age: action.payload.age,
        salary: action.payload.salary,
        address: action.payload.address,
      });
    },
    addNewEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [
        ...state.employees,
        {
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          contactNumber: action.payload.contactNumber,
          dob: action.payload.dob,
          age: action.payload.age,
          salary: action.payload.salary,
          address: action.payload.address,
        },
      ];
      console.log(state.employees);
    },
  
  },
});

export const { addEmployee, addNewEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
