import React, { useState } from 'react';
import styled from 'styled-components'
import logo from '../assets/images/leoicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCopy } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.div`
  background-color: #191B25;
  width: 100%;
  height: 50px;
  display: flex; 
  justify-content: space-evenly;
`;

const ClipboardLine = styled.div`
  width: 230px;
  padding: 3px;
  background-color: #272935;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 30px;
`;

const CopiedToolTip = styled.div`
  position: absolute;
  width: 60px;
  height: 20px;
  color: #fff;
  text-align: center;
  background-color: #B2B6C7;
  top: 40px;
  border-radius: 30px;
  padding: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  opacity: ${props => props.copied ? 1 : 0};
  transition: 0.3s;
`;

function Header() {
  const mockUpAddress = "uf45tt....krkg4";
  const [ifCopied, setIfCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText((JSON.stringify(mockUpAddress)).replaceAll('"', ''));
    setIfCopied(true);
    setTimeout(() => {
      setIfCopied(false)
    }, 2000)
  }
  return (
    <HeaderContainer>
      <div style={{ padding: '0px' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: '100%' }} />
      </div>

      <ClipboardLine onClick={copyToClipboard}>
        <p style={{color: '#fff', fontSize: '14px'}}>Address: <span>{mockUpAddress}</span></p>
        <FontAwesomeIcon icon={faCopy} style={{fontSize: '12px', color: '#fff', marginLeft: '5px' }} />
      </ClipboardLine>

      <CopiedToolTip copied={ifCopied}>Copied!</CopiedToolTip>

      <div style={{backgroundColor: '#3E4255', aspectRatio: '1/1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
        <FontAwesomeIcon icon={faUser} style={{color: '#fff', fontSize: '20px'}} />
      </div>
    </HeaderContainer>
  )
}

export default Header;
