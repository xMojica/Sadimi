import React from 'react';
import styled from 'styled-components';
const Button = (Props) => {
  return (
    <StyledWrapper>
      <button className="mx-4 delete-button" onClick={() => { Props.eliminar(Props.product) }}>
        <svg className="delete-svgIcon" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .delete-button {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background-color: var(--tercero);
    border: 2px solid #D1D5DB;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    position: relative;
  }

  .delete-svgIcon {
    width: 15px;
    transition-duration: 0.5s;
  }

  .delete-svgIcon path {
    fill: var(--quinto);
  }

  .delete-button:hover {
    padding: 8px;
    width: 120px;
    transition-duration: 0.5s;
    background-color: var(--tercero);
    align-items: center;
  }

  .delete-button:hover .delete-svgIcon {
    width: 20px;
    transition-duration: 0.5s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .delete-button::before {
    display: none;
    content: "Eliminar";
    color: var(--quinto);
    transition-duration: 0.5s;
    font-size: 4px;
    
  }

  .delete-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 16px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.5s;
  }`;

export default Button;
