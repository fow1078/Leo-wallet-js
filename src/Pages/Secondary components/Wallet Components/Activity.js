import React from 'react';
import styled from 'styled-components';
import DateItem from '../../../Components/DateItem';
import { activityData } from '../../../data/data'


const Wrapper = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: 215px;
`;

function historyGenerator(history) {
  history.sort((c, d) => {
    let cDate = new Date(c.date);
    let dDate = new Date(d.date);
    let newCDate = cDate.toDateString().split(' ').slice(1).join(' ');
    let newDDate = dDate.toDateString().split(' ').slice(1).join(' ');
    c.date = newCDate;
    d.date = newDDate;
    return new Date(d.date).getTime() - new Date(c.date).getTime();
  });
}
historyGenerator(activityData);

const sortedDates = [];
function generateDates(history) {
  const templeSet = new Set();
  history.forEach(date => {templeSet.add(date.date)})
  templeSet.forEach((elem) => {
    const templeArr = [];
    history.forEach((itm) => {
      if (itm.date === elem) {
        templeArr.push(itm);
      }
    })
    sortedDates.push({
      date: elem,
      values: templeArr
    })
  })
}
generateDates(activityData);


function Activity() {
  return (
    <Wrapper>
      {sortedDates.map((item, index) => {
        return ( 
          <>
            <h3 style={{color: '#fff', }}>{item.date}</h3>
            {item.values.map((elem) => {
              return <DateItem key={index} icon={elem.icon} label={elem.label} balance={elem.balance} status={elem.status} />
            })}
          </>
        )
      })}
    </Wrapper>
  )
}

export default Activity;



