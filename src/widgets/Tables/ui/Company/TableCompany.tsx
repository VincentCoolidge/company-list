import { Table, TrHead, Th, Checkbox } from "./styled";
import { useAppSelector, useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";
import TableBody from "./TableBody";

export const TableCompany = () => {
  const { companies } = useAppSelector((state) => state.companyReducer);

  const dispatch = useAppDispatch();
  const { checkAllCompany } = CompanySlice.actions;

  const handleToggle = () => {
    dispatch(checkAllCompany());
  };

  if (companies === null) return <></>;

  return (
    <Table>
      <thead>
        <TrHead>
          <Th>
            <Checkbox  onClick={() => handleToggle()} />
            Выделить всё
          </Th>
          <Th>Название компании</Th>
          <Th>Кол-во сотрудников</Th>
          <Th>Адрес</Th>
          <Th>Действия</Th>
        </TrHead>
      </thead>
      <TableBody companies={companies} />
    </Table>
  );
};
