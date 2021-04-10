import styled from "styled-components";

// reusable flex container
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.space};
  align-items: center;
  position: relative;
  margin: ${(props) => props.margin};

  .disabled {
    display: none;
  }
  .arrow {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: absolute;
  }
  .arrow-right {
    right: 0;
  }
  .arrow:hover {
    cursor: pointer;
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 3px;
  }
`;