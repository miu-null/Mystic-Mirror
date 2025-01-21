import './App.css';
import logo from './logo.png';
import door from './door.gif';
import React, { useState } from 'react';

const App = () => {
  const introduce = [
    '언제부터인지 당신의 작은 마음 속에서 점점 커져가는 고민,',
    '그저 시간이 해결해 주길 바라며',
    '혼자 무거운 마음을 안고 버티는 당신에게',
    '따스한 위로를 전합니다',
    '.',
    '.',
    '.',
    '. ',
    '. ',
    '\n',
    '\n',
    '정말 우리의 미래가 정해져 있다면, 우리는 왜 노력해야 할까요?',
    '힘든 시간은 운명의 선물, 성장의 기회입니다.',
    '시련을 통과하고 더 나은 당신이 되는 이 여정에서',
    '사려깊은 위로와 탁월한 조언으로 함께하겠습니다.',

    '.',
    '.',
    '.',
  ];
  const [showButton, setShowButton] = useState(false);
  const handleImageClick = () => {
    setShowButton(!showButton);
  };
  return (
    <div className="App">
      <header className="App-container">
        <div className="Rectangle">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="intro">
            {introduce.map((intro, index) => (
              <p key={index}>{intro}</p>
            ))}
          </div>
          <img
            src={door}
            className="App-door"
            alt="door"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          {showButton && <button className="App-button">문 열기</button>}
        </div>
      </header>
    </div>
  );
};

export default App;
