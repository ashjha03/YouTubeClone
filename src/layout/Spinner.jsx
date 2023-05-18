import Spin from "./LoadingSpinner.gif"

const Spinner = () => {
  return (
    <div className="w-[100vw]">
      <img className="w-[100vw]" src={Spin} alt="Loading..." />
    </div>
  )
}

export default Spinner
