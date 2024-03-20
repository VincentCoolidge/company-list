import { useState, useRef, ChangeEvent } from "react";
import {
  Table,
  TrHead,
  Th,
  Checkbox,
  HeaderBoxButton,
  Tr,
  Td,
  BoxButton,
} from "./styled";
import { useAppSelector, useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";
import TableBody from "./TableBody";
import { Button } from "shared/ui";
import { ReactComponent as CancelIcon } from "shared/assets/cancel.svg";
import { ReactComponent as SuccessIcon } from "shared/assets/success.svg";
import useOnClickOutside from "features/hooks/useClickOutside";

export const TableCompany = () => {
  const [addMode, setAddMode] = useState(false);
  const [newCompany, setNewCompany] = useState({ name: "", address: "" });
  const elementRef = useRef(null);
  const { companies } = useAppSelector((state) => state.companyReducer);

  const dispatch = useAppDispatch();
  const { addCompany } = CompanySlice.actions;

  const handleToggle = () => {
    // dispatch(checkAllCompany(!isSelectedAllCompanies));
  };

  const handleAddCompany = () => {
    if (newCompany.name.trim() !== "" && newCompany.address.trim() !== "") {
      dispatch(
        addCompany({ name: newCompany.name, address: newCompany.address })
      );
      setNewCompany((state) => ({ ...state, name: "", address: "" }));
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewCompany((state) => ({ ...state, [name]: value }));
  };

  const handleCancel = () => {
    setAddMode(false);
    setNewCompany((state) => ({ ...state, name: "", address: "" }));
  };

  useOnClickOutside(elementRef, handleCancel);

  if (companies === null) return <></>;

  return (
    <>
      <HeaderBoxButton>
        {!addMode && (
          <Button onClick={() => setAddMode(true)}>Добавить компанию</Button>
        )}
      </HeaderBoxButton>
      <Table>
        <thead>
          <TrHead>
            <Th>
              <Checkbox checked={false} onClick={() => handleToggle()} />
            </Th>
            <Th>Название компании</Th>
            <Th>Кол-во сотрудников</Th>
            <Th>Адрес</Th>
            <Th></Th>
          </TrHead>
        </thead>
        <tbody>
          {addMode && (
            <Tr checked={false} ref={elementRef}>
              <Td>
                <Checkbox checked={false} onChange={() => {}} />
              </Td>
              <Td>
                <input
                  type="text"
                  name="name"
                  value={newCompany.name}
                  onChange={handleInputChange}
                />
              </Td>
              <Td></Td>
              <Td>
                <input
                  type="text"
                  name="address"
                  value={newCompany.address}
                  onChange={handleInputChange}
                />
              </Td>
              <Td>
                <BoxButton>
                  {newCompany.address.trim() && newCompany.name.trim() ? (
                    <Button isIcon onClick={handleAddCompany}>
                      <SuccessIcon />
                    </Button>
                  ) : (
                    <></>
                  )}
                  <Button isIcon onClick={handleCancel}>
                    <CancelIcon />
                  </Button>
                </BoxButton>
              </Td>
            </Tr>
          )}
          {companies.map((item, i) => (
            <TableBody item={item} key={item.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
