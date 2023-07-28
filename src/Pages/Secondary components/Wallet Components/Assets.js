import React from 'react';
import styled from 'styled-components';
import AssetsTab from '../../../Components/AssetsTab';
import { data } from '../../../data/data'


const Wrapper = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: 215px;
`;

function Assets() {
  return (
    <Wrapper>
      {data.map(({label, icon, balance}, ind) => {
        return <AssetsTab key={ind} label={label} icon={icon} balance={balance} />
      })}
    </Wrapper>
  )
}

export default Assets
