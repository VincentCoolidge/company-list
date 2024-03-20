import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid;
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

export const HeaderBoxButton = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  justify-content: flex-end;
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 5px;
`;
