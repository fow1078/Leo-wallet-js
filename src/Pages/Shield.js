import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Components/Header';


const Wrapper = styled.div`
  padding: 10px;
`;

function Shield() {

  return (
    <>
      <Header />
      <Wrapper>
        <label for='ip-address' style={{color: '#fff', fontSize: '14px'}} >
          Your IP address
          <input id='ip-address' type='text' style={{width: '100%', height: '40px', backgroundColor: '#3F4356', borderRadius: '10px', border: '0px solid #fff', color: '#fff', marginTop: '5px', boxSizing: 'border-box', paddingLeft: '10px'}} placeholder='Enter your IP address' />
        </label>
        <div>
          <button></button>
        </div>
      </Wrapper>
    </>
  )
}

export default Shield;
