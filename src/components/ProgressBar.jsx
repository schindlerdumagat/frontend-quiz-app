export default function ProgressBar({ value = 10 }) {
  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
      />
    </div>
  );
};
