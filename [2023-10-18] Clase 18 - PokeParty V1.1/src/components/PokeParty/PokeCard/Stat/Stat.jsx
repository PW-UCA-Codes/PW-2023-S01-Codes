const Stat = ({ label = "", actual = 0, max = 255 }) => {
  return (
    <div className="relative w-full h-5 bg-bar-50 rounded-md overflow-hidden">
      <h3 className="absolute w-full left-0 text-center">
        {label.toUpperCase()}: {actual}/{max}
      </h3>
      <div
        style={{ width: `${(actual / max) * 100}%` }}
        className="left-0 h-5 bg-white"
      />
    </div>
  );
};

export default Stat;
