import { CgSpinner } from "react-icons/cg";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <CgSpinner className="animate-spin text-blue-white h-6 w-6" />
    </div>
  );
}

export default Spinner;