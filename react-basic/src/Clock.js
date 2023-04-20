function Clock() {
  return (
    <div className="clock-container">
      {/*toLocaleTimeString() 현재 사용자의 문화권에 맞는 시간을 표기해주는것 */}
      <h1>현재시간은: {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

// export function Clock2() {
//   return (
//     <div>
//       <h1>쓰시면안됩니다</h1>
//     </div>
//   );
// }

export default Clock;
