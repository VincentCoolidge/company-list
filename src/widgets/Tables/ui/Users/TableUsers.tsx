import React from "react";
import { Table, Tr, Th, Checkbox, Td } from "./styled";
import { useAppSelector } from "app/store/hooks";

export const TableUsers = () => {
  const { selectedCompanies } = useAppSelector((state) => state.companyReducer);

  if (!selectedCompanies) {
    return null;
  }

  return (
    <Table>
      <thead>
        <Tr>
          <Th>
            <Checkbox />
            Выделить всё
          </Th>
          <Th>Фамилия</Th>
          <Th>Имя</Th>
          <Th>Должность</Th>
        </Tr>
      </thead>
      <tbody>
        {/* <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>Doe</Td>
          <Td>John</Td>
          <Td>Developer</Td>
        </Tr>
        <Tr>
          <Td>
            <Checkbox />
          </Td>
          <Td>Smith</Td>
          <Td>Jane</Td>
          <Td>Designer</Td>
        </Tr> */}
      </tbody>
    </Table>
  );
};
