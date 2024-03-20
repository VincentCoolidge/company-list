import styled from "styled-components";

export const Button = styled.button<{ isIcon: boolean | undefined }>`
  cursor: pointer;
  color: white;
  ${(props) =>
    props.isIcon
      ? "background-color: transparent; border: 0;"
      : "background-color: inherit; border: 1px solid white; padding: 5px; border-radius: 7px;"};
`;
