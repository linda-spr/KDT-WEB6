// 자식 컴포넌트
import React from 'react';

class LifeCycleClassChild extends React.Component {
  // 컴포넌트가 mount 되었을 때 실행
  componentDidMount() {
    console.log('mount!!!');
  }

  // 컴포넌트가 update 되었을 때 실행
  componentDidUpdate() {
    console.log('update!!!');
  }

  // 컴포넌트가 unmount 되었을 때 실행
  componentWillUnmount() {
    console.log('unmount!!!');
  }

  render() {
    return <p>LifeCycleClassChild {this.props.number}</p>;
  }
}

export default LifeCycleClassChild;
