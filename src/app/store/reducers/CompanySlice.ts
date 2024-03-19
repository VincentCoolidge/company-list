import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
// import { ICompany, IUser } from "app/types/types";
import { initialState } from "../initialState";

const employeesAdapter = createEntityAdapter<any>();

export const CompanySlice = createSlice({
  name: "companies-list",
  initialState,
  reducers: {
    checkCompany: (state, action: PayloadAction<string>) => {
      const company = state.companies?.find(
        (item) => item.id === action.payload
      );

      if (company) {
        company.checked = !company.checked;
        const { employees } = company;

        if (company.checked) {
          // state.listEmployees = Array.isArray(state.listEmployees)
          //   ? [...state.listEmployees, ...employees]
          //   : [...employees];
        } else {
          // const currentListEmployees = Array.isArray(state.listEmployees)
          //   ? [...state.listEmployees]
          //   : null;
          // state.listEmployees = Array.isArray(state.listEmployees)
          //   ? [...employees]
          //   : null;
          // const test = Array.isArray(state.listEmployees)
          //   ? state.listEmployees.filter(
          //       (element) => !employees.includes(element)
          //     )
          //   : null;
        }
      }
    },
    checkAllCompany: (state) => {
      if (Array.isArray(state.companies)) {
        const newTodos = [...state.companies];
        newTodos.map((item) => item.checked === true);
        state.companies = newTodos;
      }
    },
  },
});

export default CompanySlice.reducer;
