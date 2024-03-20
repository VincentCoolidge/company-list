import { useState, useRef, ChangeEvent } from "react";
import {
  Table,
  Tr,
  Th,
  Checkbox,
  Td,
  HeaderBoxButton,
  TrHead,
  BoxButton,
} from "./styled";
import useOnClickOutside from "features/hooks/useClickOutside";

import { useAppSelector } from "app/store/hooks";
import TableBody from "./TableBody";
import { Button } from "shared/ui";

import { ReactComponent as CancelIcon } from "shared/assets/cancel.svg";
import { ReactComponent as SuccessIcon } from "shared/assets/success.svg";

import { useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";

export const TableUsers = () => {
  const { selectedCompany } = useAppSelector((state) => state.companyReducer);
  const [addMode, setAddMode] = useState(false);
  const [newUser, setNewUser] = useState({
    lastName: "",
    firstName: "",
    position: "",
  });
  const elementRef = useRef(null);

  const dispatch = useAppDispatch();
  const { addtoUser } = CompanySlice.actions;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((state) => ({ ...state, [name]: value }));
  };

  const handleCancel = () => {
    setAddMode(false);
    setNewUser((state) => ({ ...state, lastName: "", firstName: "", position: "" }));
  };

  const handleAddUser = () => {
    if (
      newUser.lastName.trim() !== "" &&
      newUser.firstName.trim() !== "" &&
      newUser.position.trim() !== ""
    ) {
      dispatch(
        addtoUser({
          lastName: newUser.lastName,
          firstName: newUser.firstName,
          position: newUser.position,
        })
      );
      setNewUser((state) => ({
        ...state,
        lastName: "",
        firstName: "",
        position: "",
      }));
    }
  };

  useOnClickOutside(elementRef, handleCancel);

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
          <TrHead>
            <Th>
              <Checkbox />
            </Th>
            <Th>Фамилия</Th>
            <Th>Имя</Th>
            <Th>Должность</Th>
            <Th />
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
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleInputChange}
                />
              </Td>
              <Td>
                <input
                  type="text"
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleInputChange}
                />
              </Td>
              <Td>
                <input
                  type="text"
                  name="position"
                  value={newUser.position}
                  onChange={handleInputChange}
                />
              </Td>
              <Td>
                <BoxButton>
                  {newUser.firstName.trim() &&
                  newUser.lastName.trim() &&
                  newUser.position.trim() ? (
                    <Button isIcon onClick={handleAddUser}>
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
          {selectedCompany.employees.map((item, i) => {
            return <TableBody item={item} key={item.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};
