import { useNavigate } from 'react-router-dom';

function Page1() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Techmaster</h1>
      <div className="card">
        <p>Page 2</p>
        <button onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  )
}

export default Page1
