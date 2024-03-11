import React from 'react';
// 컴포넌트는 항상 대문자로 시작해야 한다!
// 컴포넌트 자동 생성 rafce

// 상황에 맞춰 에러 방지를 위해 조건을 써야 한다.
// 유동적인 props 값일 땐 때에 따라 조건부 렌더링을 할 수 있어야 함!
const Box = (props) => {
  //console.log('props ', props);
  let result;
  if (
    props.title === 'computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }
  return (
    <div className={'box ${result}'}>
      <h1>{props.title}</h1>
      <h3>{props.item && props.item.name}</h3>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
