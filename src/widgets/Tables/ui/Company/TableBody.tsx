import { ICompany } from "app/types/types";
import { Tr, Td, Checkbox } from "./styled";
import { useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";

type Props = {
  companies: ICompany[];
};

const TableBody = ({ companies }: Props) => {
  const dispatch = useAppDispatch();
  const { checkCompany } = CompanySlice.actions;

  const handleToggle = (id: string) => {
    dispatch(checkCompany(id));
  };

  return (
    <tbody>
      {companies.map((item, i) => {
        const { id, name, employeesCount, address, checked } = item;

        return (
          <Tr key={id} checked={checked}>
            <Td>
              <Checkbox checked={checked} onChange={() => handleToggle(id)} />
            </Td>
            <Td>{name}</Td>
            <Td>{employeesCount}</Td>
            <Td>{address}</Td>
            <Td></Td>
          </Tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
