import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass'; // 박스클래스 컴포넌트 불러오기

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://i.pinimg.com/564x/d5/af/5d/d5af5df8a879bdcd3b797f8647377355.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxODA2MTVfMjIz/MDAxNTI5MDQ2NzU1MDYx.mdkQcjK8LSdeVH3RQOhV76OWT5HGajqbILD02GvunMUg.s7dXmrvubiDktBChGgtBzubQX1WZrR-DZp-m5UFlk3Ig.JPEG.lhy7341/FB_IMG_1529024513438.jpg?type=w800',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://i.pinimg.com/564x/a0/50/76/a050760105c7245ab5e22b7eca7b863a.jpg',
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    const computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    this.setState({
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 'win' : 'lose';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 'win' : 'lose';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 'win' : 'lose';
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  startGame = () => {
    this.setState({ gameStarted: true });
  };

  render() {
    const { gameStarted, userSelect, computerSelect, result } = this.state;

    if (!gameStarted) {
      return (
        <div className="start">
          <button onClick={this.startGame}>Game Start</button>
        </div>
      );
    }

    return (
      <div>
        <div className="main">
          <BoxClass title="you" item={userSelect} result={result} />
          <BoxClass title="computer" item={computerSelect} result={result} />
        </div>
        <div className="main btn-area">
          <button
            className="game-btn sci"
            onClick={() => this.play('scissors')}
          >
            <i className="fa-regular fa-hand-scissors"></i>
          </button>
          <button className="game-btn rock" onClick={() => this.play('rock')}>
            <i className="fa-regular fa-hand-back-fist"></i>
          </button>
          <button className="game-btn paper" onClick={() => this.play('paper')}>
            <i className="fa-regular fa-hand"></i>
          </button>
        </div>
      </div>
    );
  }
}

/* 함수형 컴포넌트 - > 클래스 컴포넌트로 변경할 시 
React.Component를 상속하여 클래스 컴포넌트를 생성
생성자 메서드를 사용하여 초기 상태를 설정
화살표 함수로 선언된 메서드는 클래스의 멤버 함수로 변경된다.
상태 업데이트는 setState 메서드를 사용하여 수행된다.
렌더링 메서드(render()) 안에서 this.state를 사용하여 상태에 접근 가능 
함수형 컴포넌트에서 props를 사용하는 부분은 클래스 컴포넌트에서 this.props로 접근 가능
*/
