import { v4 as uuidv4 } from "uuid";
import { EntityState } from "@reduxjs/toolkit";

import { ICompany, IEmployee } from "app/types/types";

interface State {
  companies: ICompany[] | null;
  selectedCompany: ICompany | null;
}

export const initialState: State = {
  companies: [
    {
      id: "company_" + uuidv4(),
      checked: false,
      name: "Company A",
      employeesCount: 5,
      address: "123 Main Street, City A",
      employees: [
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Doe",
          firstName: "John",
          position: "Developer",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Smith",
          firstName: "Jane",
          position: "Designer",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Johnson",
          firstName: "Alice",
          position: "Manager",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Brown",
          firstName: "Bob",
          position: "Engineer",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Lee",
          firstName: "Sarah",
          position: "Analyst",
        },
      ],
    },
    {
      id: "company_" + uuidv4(),
      checked: false,
      name: "Company B",
      employeesCount: 5,
      address: "456 Elm Street, City B",
      employees: [
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Davis",
          firstName: "Mike",
          position: "Marketing",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Wilson",
          firstName: "Emily",
          position: "Sales",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "White",
          firstName: "David",
          position: "HR",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Miller",
          firstName: "Olivia",
          position: "Finance",
        },
        {
          id: "user" + uuidv4(),
          checked: false,
          lastName: "Anderson",
          firstName: "Michael",
          position: "IT",
        },
      ],
    },
  ],
  selectedCompany: null,
};
