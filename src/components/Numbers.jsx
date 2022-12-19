import React from 'react';

const Numbers = (props) => {
  return (
    <div className='number-container'>
      <div className="numbers">{props.numbers[0]}</div>
      <div className="numbers">{props.numbers[1]}</div>
      <div className="numbers">{props.numbers[2]}</div>
      <div className="numbers">{props.numbers[3]}</div>
      <div className="numbers">{props.numbers[4]}</div>
    </div>
)
}

export default Numbers