import React, { useState } from "react";
import { Table, Tr, Th, Checkbox, Td, HeaderBoxButton } from "./styled";
import { useAppSelector } from "app/store/hooks";
import TableBody from "./TableBody";
import { Button } from "shared/ui";

export const TableUsers = () => {
  const { selectedCompany } = useAppSelector((state) => state.companyReducer);
  const [addMode, setAddMode] = useState(false);

  if (!selectedCompany) {
    return null;
  }

  return (
    <>
      <HeaderBoxButton>
        {!addMode && (
          <Button onClick={() => setAddMode(true)}>Добавить работника</Button>
        )}
      </HeaderBoxButton>
      <Table>
        <thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>Фамилия</Th>
            <Th>Имя</Th>
            <Th>Должность</Th>
            <Th />
          </Tr>
        </thead>
        <tbody>
          {selectedCompany.employees.map((item, i) => {
            return <TableBody item={item} key={item.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};
