import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const ProbStudent = () => {
  const { name } = useParams();
  console.log(name); // 'sean' or 'codingon'

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('name');

  return (
    <div>
      <h2>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span> 입니다.
      </h2>
      {keyword && (
        <h2>
          실제 이름은 <span style={{ color: 'red' }}>{keyword}</span> 입니다.
        </h2>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
    </div>
  );
};

export default ProbStudent;
