import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/the Lambda/White/White.png'
import Button from './Button';


const Wrapper = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  padding-top: 15px; 
  padding-bottom: 15px;
`;


function Balance() {
  return (
    <Wrapper> 
      <div>
        <h1 style={{color: '#fff', fontSize: '46px', fontWeight: '500'}}>4<span style={{color: '#9E9E9E', fontSize: '24px', fontWeight: '500'}}>.04</span><img src={Logo} style={{width: '38px', height: 'auto', marginLeft: '15px'}} alt="Aleo black Icon" /></h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        <Button label='Send' bg='#285BFE' />
        <Button label='Recieve' bg='#642AB5' />
      </div>
    </Wrapper>
  )
}

export default Balance;
