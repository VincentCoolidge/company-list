import { TableCompany, TableUsers } from "widgets/Tables";
import { Root, Container } from "./styled";

export const MainPage = () => {
  return (
    <Root>
      <Container>
        <TableCompany />
      </Container>
      <Container>
        <TableUsers />
      </Container>
    </Root>
  );
};
