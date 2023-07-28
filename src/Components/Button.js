import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.div`
  background-color: ${props => props.bgclr };
  padding: 5px 15px;
  color: #fff;
  font-size: 15px; 
  font-weight: 600;
  width: 80px;
  border-radius: 13px;
  text-align: center;
  cursor: pointer;
`;

function Button(props) {
  return (
    <ButtonWrapper bgclr={props.bg}>
      {props.label}
    </ButtonWrapper>
  )
}

export default Button;
