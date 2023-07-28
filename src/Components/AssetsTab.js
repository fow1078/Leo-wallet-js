import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const AssetTab = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #191B25;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  margin-bottom: 7px;
`;

function AssetsTab(props) {

  return (
    <AssetTab>
      <div style={{display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <div>
          <img src={props.icon} alt='Lambda Logo' style={{width: '35px'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px'}}>
          <h1 style={{fontSize: '16px', color: '#fff', fontWeight: 500, marginBottom: 0, marginTop: 0}}>{props.label}</h1>
          <p style={{color: '#797575', fontSize: '12px', marginBottom: 0, marginTop: 0, fontWeight: 500}}>{props.balance}</p>
        </div>
      </div>
      <div style={{marginRight: '15px'}}>
        <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '20px', color: '#fff' }} />
      </div>
    </AssetTab>
  )
}

export default AssetsTab;
