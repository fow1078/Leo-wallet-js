import React, { useState } from 'react';
import styled from 'styled-components'
import Header from '../Components/Header';
import Balance from '../Components/Balance';
import Assets from './Secondary components/Wallet Components/Assets';
import Activity from './Secondary components/Wallet Components/Activity';
import NFT from './Secondary components/Wallet Components/NFT';


const Wrapper = styled.div`

`;

const TabWrapper = styled.div`
  color: ${props => props.active ? '#fff' : '#D2D2D2'};
  font-size: 16px;
  border-bottom: ${props => props.active ? '#01EAEF 2px solid' : '#4F4F4F 2px solid'};
  width: 33.3%; 
  text-align: center;
  padding-bottom: 4px;
  transition: 0.4s;
  font-weight: 500;
  cursor: pointer;
`;

function Wallet() {
  const [walletTab, setWalletTab] = useState('assets');
  return (
    <>
      <Header />
      <Wrapper>
        <Balance />
        <div style={{width: '100%', padding: '10px 0', marginTop: '10px', display: 'flex', justifyContent: 'space-around'}}>
          <TabWrapper onClick={() => {setWalletTab('assets')}} active={walletTab === 'assets'}>
            Assets
          </TabWrapper>
          <TabWrapper onClick={() => {setWalletTab('activity')}} active={walletTab === 'activity'}>
            Activity
          </TabWrapper>
          <TabWrapper onClick={() => {setWalletTab('nft')}} active={walletTab === 'nft'}>
            NFT
          </TabWrapper>
        </div>
        {walletTab === 'assets' && 
          <Assets />
        }
        {walletTab === 'activity' && 
          <Activity />
        }
        {walletTab === 'nft' && 
          <NFT />
        }
      </Wrapper>
    </>
  )
}

export default Wallet
