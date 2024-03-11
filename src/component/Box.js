import React from 'react';
// 컴포넌트는 항상 대문자로 시작해야 한다!
// 컴포넌트 자동 생성 rafce

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://i.pinimg.com/564x/42/aa/be/42aabe8a7bb5797e92889b64f36c0fd2.jpg"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
