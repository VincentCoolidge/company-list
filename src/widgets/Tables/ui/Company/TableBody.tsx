import { useState, useRef, ChangeEvent } from "react";
import { ICompany } from "app/types/types";
import { Tr, Td, Checkbox, BoxButton } from "./styled";
import { useAppDispatch } from "app/store/hooks";
import { CompanySlice } from "app/store/reducers/CompanySlice";
import { Button } from "shared/ui";
import useOnClickOutside from "features/hooks/useClickOutside";

import { ReactComponent as CancelIcon } from "shared/assets/cancel.svg";
import { ReactComponent as EditIcon } from "shared/assets/edit.svg";
import { ReactComponent as SuccessIcon } from "shared/assets/success.svg";
import { ReactComponent as TrashIcon } from "shared/assets/trash.svg";

type Props = {
  item: ICompany;
};

const TableBody = ({ item }: Props) => {
  const { id, name, employeesCount, address, checked } = item;

  const [editMode, setEditMode] = useState(false);
  const [editCompany, setEditCompany] = useState({ name, address });
  const elementRef = useRef(null);

  const dispatch = useAppDispatch();
  const { checkToCompany, deleteToCompany, editToCompany } =
    CompanySlice.actions;

  const handleToggle = () => {
    dispatch(checkToCompany(id));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditCompany((state) => ({ ...state, [name]: value }));
  };

  const handleCancel = () => {
    setEditCompany((state) => ({ ...state, name, address }));
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteToCompany(id));
  };

  const handleEditCompany = () => {
    if (editCompany.name.trim() !== "" && editCompany.address.trim() !== "") {
      dispatch(
        editToCompany({
          id: id,
          name: editCompany.name,
          address: editCompany.address,
        })
      );
      setEditCompany((state) => ({ ...state, name, address }));
      setEditMode(false);
    }
  };

  useOnClickOutside(elementRef, handleCancel);

  return (
    <Tr checked={checked} ref={elementRef}>
      <Td>
        <Checkbox checked={checked} onChange={handleToggle} />
      </Td>
      <Td>
        {editMode ? (
          <input
            type="text"
            name="name"
            value={editCompany.name}
            onChange={handleInputChange}
          />
        ) : (
          name
        )}
      </Td>
      <Td>{employeesCount}</Td>
      <Td>
        {editMode ? (
          <input
            type="text"
            name="address"
            value={editCompany.address}
            onChange={handleInputChange}
          />
        ) : (
          address
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
