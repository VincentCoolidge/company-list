import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { ICompany, IEmployee } from "app/types/types";
import { v4 as uuidv4 } from "uuid";
import { stat } from "fs";

export const CompanySlice = createSlice({
  name: "companies-list",
  initialState,
  reducers: {
    checkToCompany: (state, action: PayloadAction<string>) => {
      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === action.payload
      );

      if (company) {
        company.checked = !company.checked;

        if (state.selectedCompany === null) {
          state.selectedCompany = company;
        } else {
          state.selectedCompany = null;
        }
      }
    },
    addCompany: (
      state,
      action: PayloadAction<{ name: string; address: string }>
    ) => {
      const newCompany: ICompany = {
        id: "company_" + uuidv4(),
        checked: false,
        name: action.payload.name,
        employeesCount: 0,
        address: action.payload.address,
        employees: [],
      };

      if (state.companies) {
        state.companies.push(newCompany);
      }
    },
    deleteToCompany: (state, action: PayloadAction<string>) => {
      if (state.companies === null) {
        return;
      }

      if (state.companies.length > 0) {
        state.companies = state.companies.filter(
          (item) => item.id !== action.payload
        );
      } else {
        state.companies === null;
      }
    },
    editToCompany: (
      state,
      action: PayloadAction<{ id: string; name: string; address: string }>
    ) => {
      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === action.payload.id
      );

      if (company) {
        company.name = action.payload.name;
        company.address = action.payload.address;
      }
    },
    addtoUser: (
      state,
      action: PayloadAction<{
        lastName: string;
        firstName: string;
        position: string;
      }>
    ) => {
      const newUser: IEmployee = {
        id: uuidv4() + "user",
        checked: false,
        lastName: action.payload.lastName,
        firstName: action.payload.firstName,
        position: action.payload.position,
      };

      if (state.selectedCompany === null) {
        return;
      }

      const currentIDCompany = state.selectedCompany.id;

      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === currentIDCompany
      );

      if (company) {
        company.employeesCount = company.employees.length + 1;
        company.employees.push(newUser);
        state.selectedCompany.employees.push(newUser);
      }
    },
    deleteToUser: (state, action: PayloadAction<string>) => {
      if (state.selectedCompany === null) {
        return;
      }

      const currentIDCompany = state.selectedCompany.id;

      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === currentIDCompany
      );

      if (company) {
        company.employeesCount = company.employees.length - 1;
        const index = company.employees.findIndex(
          (item) => item.id === action.payload
        );

        if (index === -1) {
          return;
        }

        company.employees.splice(index, 1);
        state.selectedCompany.employees.splice(index, 1);
      }
    },
    editToUser: (
      state,
      action: PayloadAction<{
        id: string;
        firstName: string;
        lastName: string;
        position: string;
      }>
    ) => {
      if (state.selectedCompany === null) {
        return;
      }

      const currentIDCompany = state.selectedCompany.id;

      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === currentIDCompany
      );

      if (company) {
        const user = company.employees.find(
          (item) => item.id === action.payload.id
        );

        if (user) {
          user.firstName = action.payload.firstName;
          user.lastName = action.payload.firstName;
          user.position = action.payload.firstName;

          const currentUser = state.selectedCompany.employees.find(
            (item) => item.id === action.payload.id
          );

          if (currentUser) {
            currentUser.firstName = action.payload.firstName;
            currentUser.lastName = action.payload.firstName;
            currentUser.position = action.payload.firstName;
          }
        }
      }
    },
    checkToUser: (state, action: PayloadAction<string>) => {
      if (state.selectedCompany === null) {
        return;
      }

      const currentIDCompany = state.selectedCompany.id;

      if (state.companies === null) {
        return;
      }

      const company = state.companies.find(
        (item) => item.id === currentIDCompany
      );

      if (company) {
        const user = company.employees.find(
          (item) => item.id === action.payload
        );

        if (user) {
          user.checked = !user.checked;

          const currentUser = state.selectedCompany.employees.find(
            (item) => item.id === action.payload
          );

          if (currentUser) {
            currentUser.checked = !currentUser.checked;
          }
        }
      }
    },
  },
});

// checkToCompany, deleteToCompany, editToCompany

export default CompanySlice.reducer;
