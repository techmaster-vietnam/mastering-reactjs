import { PageProps } from "./common"

const Page1: React.FC<PageProps> = ({ setCurrentViewURI }) => {
  return (
    <>
      <h1>Techmaster</h1>
      <div className="card">
        <p>Page 2</p>
        <button onClick={() => setCurrentViewURI("/page1")}>
          Back to Page 1
        </button>
      </div>
    </>
  )
}

export default Page1
