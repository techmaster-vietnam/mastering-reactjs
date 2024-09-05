import { useNavigate } from 'react-router-dom';

function Page1() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Techmaster</h1>
      <div className="card">
        <p>Page 1</p>
        <button onClick={() => navigate("/entry")}>
          Back to Entry
        </button>
        <button onClick={() => navigate("/page2")}>
          Move to Page 2
        </button>
        <button onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  )
}

export default Page1
