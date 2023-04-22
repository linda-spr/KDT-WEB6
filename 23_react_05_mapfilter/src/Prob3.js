// TODO: useState 불러오기
import { useState } from 'react';

const Prob3 = () => {
  const [inputWriter, setInputWriter] = useState(''); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(''); // 제목 input state
  const [inputSearch, setInputSearch] = useState(''); // 검색어 input state
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: '민수',
      title: '안뇽',
    },
    {
      id: 2,
      writer: '지민',
      title: '하이하이',
    },
    {
      id: 3,
      writer: '희수',
      title: '멋쟁이',
    },
  ]); // 댓글 목록 배열 state
  const [result, setResult] = useState([]); // 검색 결과 배열 state
  const [searchType, setSearchType] = useState('writer'); // 검색 타입 select 요소 value state

  const addComment = () => {
    console.log('추가 버튼 클릭!');
    // TODO: comment state에 원소 추가

    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    }; // comment state 배열에 새로 추가할 요소

    // ver1. concat()
    // const newComment = comment.concat(newData); // input에 작성한 값을 추가한 새로운 배열
    // setComment(newComment);

    // ver2. spread(...) 연산자
    setComment([...comment, newData]);

    // TODO: input 초기화
    setInputWriter('');
    setInputTitle('');
  };

  const searchComment = () => {
    // TODO: comment 배열 특정 조건에 맞는 것으로 filter
    const searchResult = comment.filter((cmt) => {
      // console.log(cmt); // comment 배열 state에 대한 각 원소(객체)
      // console.log(cmt[searchType]); // [작성자] 선택 => 민수, 지민, 희수 // [제목] 안뇽, 하이하이, 멋쟁이
      // console.log(cmt[searchType].includes(inputSearch));
      // false; 검색 결과가 없음 -> null
      // true; 검색 결과가 있음 -> 검색 결과 (배열) 반환

      if (!cmt[searchType].includes(inputSearch)) {
        // !false
        return null;
      }

      return cmt;
    });
    console.log('검색 결과 >> ', searchResult);

    // TODO: 검색 결과 state 설정
    setResult(searchResult);
    setInputSearch('');
  };

  const selectSearchType = (e) => {
    // console.log('select 태그의 옵션이 변경되었음!');
    // console.log('선택한 option 태그의 value >> ', e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value);
  };

  return (
    <div>
      {/* 댓글 추가 폼 */}
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      {/* 검색 폼 */}
      <form>
        <select name="type" value={searchType} onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어 입력하세요"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />

        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((cmt) => {
            // cmt => { id: n, writer: xxx, title: xxx }
            return (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: result state 반복 */}
            {result.map((r) => {
              // r => { id: n, title: 'xxx', writer: 'xxx' }
              return (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.title}</td>
                  <td>{r.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default Prob3;
