import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';


const DateTab = styled.div`
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

const DateParagraph = styled.p`
  color: ${props => props.status === 'sent' ? '#FF5555' : '#6BEA65'};
  font-size: 12px; 
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 500;
`;

function DateItem(props) {

  return (
    <DateTab>
      <div style={{display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <div>
          <img src={props.icon} alt='Lambda Logo' style={{width: '35px'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px'}}>
          <h1 style={{fontSize: '16px', color: '#fff', fontWeight: 500, marginBottom: 0, marginTop: 0}}>{props.label}</h1>
          <DateParagraph status={props.status}>{props.status === 'sent' ? '-' + props.balance : '+' + props.balance}</DateParagraph>
        </div>
      </div>
      <div style={{marginRight: '15px', transform: props.status === 'sent' ? '' : 'scale(-1)' }}>
        <FontAwesomeIcon icon={faArrowTrendUp} style={{fontSize: '22px', color: props.status === 'sent' ? '#FF5555' : '#6BEA65' }} />
      </div>
    </DateTab>
  )
}

export default DateItem;
