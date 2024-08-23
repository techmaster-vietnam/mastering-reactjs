import { PageProps } from "./common"

const Page1: React.FC<PageProps> = ({ setCurrentViewURI }) => {
  return (
    <>
      <h1>Techmaster</h1>
      <div className="card">
        <p>Page 1</p>
        <button onClick={() => setCurrentViewURI("/entry")}>
          Back to Entry
        </button>
      </div>
    </>
  )
}

export default Page1
