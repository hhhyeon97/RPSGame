import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    let result;
    if (
      this.props.title === 'computer' &&
      this.props.result !== 'tie' &&
      this.props.result !== ''
    ) {
      result = this.props.result === 'win' ? 'lose' : 'win';
    } else {
      result = this.props.result;
    }

    const imgSrc = this.props.item ? this.props.item.img : null;

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        {imgSrc && <img className="item-img" src={imgSrc} alt="Game item" />}
        <h2>{result}</h2>
      </div>
    );
  }
}

/*
class 키워드를 사용하여 클래스 컴포넌트를 정의
render() 메서드 내에서 JSX를 반환 / 이를 통해 컴포넌트의 UI 정의 
클래스 컴포넌트에서는 this.props를 사용하여 props에 접근해야 한다.
컴포넌트의 상태(state)를 사용해야 하는 경우 constructor 메서드를 추가하여 초기화한다.
*/
