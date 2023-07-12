import { styled } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 50px;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }

  @media (min-width: 992px) {
    padding: 20px 160px;
    flex-direction: row;
  }

  @media (max-width: 500px) {
    padding: 20px;
    > div {
      gap: 1.4rem;
      flex-direction: column;
    }
  }
`;
