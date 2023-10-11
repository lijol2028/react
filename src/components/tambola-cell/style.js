import styled from "styled-components";

export const Cell = styled.div`
  background: ${(props) => (props.numberCalled ? "#ffbf00" : "#eee")};
  color: #333;
  font-size: 18px;
  font-family: "Rubik", sans-serif;

  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;

  border-radius: 3px;
`;
