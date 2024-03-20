import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { ICompany, IEmployee } from "app/types/types";
import { v4 as uuidv4 } from "uuid";

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
        state.selectedCompany = company;
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
  },
});

export default CompanySlice.reducer;
