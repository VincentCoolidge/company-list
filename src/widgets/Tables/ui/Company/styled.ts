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

export const TrHead = styled.tr``;

export const Tr = styled.tr<{ checked: boolean }>`
  background-color: ${(props) => (props.checked ? "#BF4F74" : "inherit")};
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 5px;
`;
