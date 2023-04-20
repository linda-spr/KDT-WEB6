import React from 'react';

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Codingon',
    };

    // this.printConsole = this.printConsole.bind(this);
  }

  // printConsole() {
  //   console.log(this);
  //   console.log('버튼 클릭! >> ', this.state);
  // }

  printConsole = () => {
    console.log(this);
    console.log('버튼 클릭! >> ', this.state);
  };

  printConsole2 = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        <button onClick={this.printConsole}>print console</button>
        <button onClick={() => this.printConsole2('hihi')}>print msg</button>
      </div>
    );
  }
}

export default ClassComponent;
