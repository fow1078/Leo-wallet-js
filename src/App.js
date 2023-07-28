import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser, faShieldHalved, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Wallet from './Pages/Wallet';
import Shield from './Pages/Shield';
import Settings from './Pages/Settings';


const TabsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #191B25;
  position: absolute;
  bottom: 0px;
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
`;

const TabContainer = styled.div`
  padding-bottom: 5px;
  border-bottom: ${props => props.active ? 'solid 2px #0BACA2' : 'none'};
  margin-bottom: ${props => props.active ? '45px' : 0};
  transition: 0.4s;
`;

const Tab = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3E4255;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
`;

function App() {
  const [activeTab, setActiveTab] = useState('wallet');
  return (
    <>
      {activeTab === 'wallet' && 
        <Wallet />
      }
      {activeTab === 'shield' && 
        <Shield />
      }
      {activeTab === 'settings' && 
        <Settings />
      }
      <TabsContainer>

        <TabContainer onClick={() => {setActiveTab('wallet')}} active={activeTab === 'wallet'}>
          <Tab active={activeTab === 'wallet'}>
            <FontAwesomeIcon icon={faHomeUser} style={{fontSize: '20px', color: '#fff'}} />
          </Tab>
        </TabContainer>

        <TabContainer onClick={() => {setActiveTab('shield')}} active={activeTab === 'shield'}>
          <Tab active={activeTab === 'shield'}>
            <FontAwesomeIcon icon={faShieldHalved} style={{fontSize: '20px', color: '#fff'}} />
          </Tab>
        </TabContainer>

        <TabContainer onClick={() => {setActiveTab('settings')}} active={activeTab === 'settings'}>
          <Tab active={activeTab === 'settings'}>
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{fontSize: '20px', color: '#fff'}} />
          </Tab>
        </TabContainer>


      </TabsContainer>
    </>
  );
}

export default App;
