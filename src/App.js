import logo from './logo.svg';
import './App.css';
import Box from './component/Box'; // 박스 컴포넌트 불러오기

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼 클릭 시 클릭한 값이 박스에 보인다.
// 4. 컴퓨터 결과 박스에는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 결정한다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정)

// jsx 컴포넌트는 반드시 하나의 덩어리를 리턴해야 한다.

function App() {
  return (
    <div>
      <div className="main">
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
