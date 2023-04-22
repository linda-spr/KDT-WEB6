import React from 'react';

class RefSample3 extends React.Component {
  handleFoucs = () => {
    console.log(this); // RefSample3 현재 컴포넌트
    console.log(this.myInput.value); // input value 출력

    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFoucs}>focus</button>
      </>
    );
  }
}

export default RefSample3;
