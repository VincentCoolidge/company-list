import React, { useState } from "react";
import { Tr, Td, Checkbox, BoxButton } from "./styled";
import { IEmployee } from "app/types/types";
import { Button } from "shared/ui";

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

  const handleEditCompany = () => {};

  const handleCancel = () => {};

  const handleDelete = () => {};

  return (
    <Tr>
      <Td>
        <Checkbox checked={checked} />
      </Td>
      <Td>{lastName}</Td>
      <Td>{firstName}</Td>
      <Td>{position}</Td>
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
