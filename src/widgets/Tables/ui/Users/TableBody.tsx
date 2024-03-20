import { useState, useRef, ChangeEvent } from "react";
import { Tr, Td, Checkbox, BoxButton } from "./styled";
import { IEmployee } from "app/types/types";
import { Button } from "shared/ui";

import { useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";

import { ReactComponent as CancelIcon } from "shared/assets/cancel.svg";
import { ReactComponent as EditIcon } from "shared/assets/edit.svg";
import { ReactComponent as SuccessIcon } from "shared/assets/success.svg";
import { ReactComponent as TrashIcon } from "shared/assets/trash.svg";

type Props = {
  item: IEmployee;
};

const TableBody = ({ item }: Props) => {
  const { checked, firstName, lastName, position, id } = item;
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState({
    firstName,
    lastName,
    position,
  });
  const elementRef = useRef(null);
  const dispatch = useAppDispatch();

  const { deleteToUser, editToUser, checkToUser } = CompanySlice.actions;

  const handleToggle = () => {
    dispatch(checkToUser(id));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditUser((state) => ({ ...state, [name]: value }));
  };

  const handleCancel = () => {
    setEditUser((state) => ({ ...state, firstName, lastName, position }));
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteToUser(id));
  };

  const handleEditCompany = () => {
    if (
      editUser.firstName.trim() !== "" &&
      editUser.lastName.trim() !== "" &&
      editUser.position.trim() !== ""
    ) {
      dispatch(
        editToUser({
          id: id,
          firstName: editUser.firstName,
          lastName: editUser.lastName,
          position: editUser.position,
        })
      );
      setEditUser((state) => ({ ...state, firstName, lastName, position }));
      setEditMode(false);
    }
  };

  return (
    <Tr checked={checked}>
      <Td>
        <Checkbox checked={checked} onChange={handleToggle} />
      </Td>
      <Td>
        {editMode ? (
          <input
            type="text"
            name="lastName"
            value={editUser.lastName}
            onChange={handleInputChange}
          />
        ) : (
          lastName
        )}
      </Td>
      <Td>
        {editMode ? (
          <input
            type="text"
            name="firstName"
            value={editUser.firstName}
            onChange={handleInputChange}
          />
        ) : (
          firstName
        )}
      </Td>
      <Td>
        {editMode ? (
          <input
            type="text"
            name="position"
            value={editUser.position}
            onChange={handleInputChange}
          />
        ) : (
          position
        )}
      </Td>
      <Td>
        {editMode ? (
          <BoxButton>
            <Button isIcon onClick={handleEditCompany}>
              <SuccessIcon />
            </Button>
            <Button isIcon onClick={handleCancel}>
              <CancelIcon />
            </Button>
          </BoxButton>
        ) : (
          <BoxButton>
            <Button isIcon onClick={() => setEditMode(true)}>
              <EditIcon />
            </Button>
            <Button isIcon onClick={handleDelete}>
              <TrashIcon />
            </Button>
          </BoxButton>
        )}
      </Td>
    </Tr>
  );
};

export default TableBody;
