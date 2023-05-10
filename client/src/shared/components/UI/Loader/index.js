import { LoadingSpinnerOverlay } from "./style";

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <LoadingSpinnerOverlay >
      <div className="lds-dual-ring"></div>
    </LoadingSpinnerOverlay>
  );
}

export default LoadingSpinner;