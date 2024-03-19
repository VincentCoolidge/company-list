import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 5px;
`;
