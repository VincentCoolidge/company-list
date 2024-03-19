export interface IEmployee {
  id: string;
  lastName: string;
  firstName: string;
  position: string;
  checked: boolean;
}

export interface ICompany {
  id: string;
  name: string;
  employeesCount: number;
  address: string;
  checked: boolean;
  employees: IEmployee[];
}
