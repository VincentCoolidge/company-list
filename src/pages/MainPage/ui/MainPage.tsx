import { TableCompany, TableUsers } from "widgets/Tables";
import { Container } from "./styled";

export const MainPage = () => {
  return (
    <Container>
      <TableCompany />
      <TableUsers />
    </Container>
  );
};
