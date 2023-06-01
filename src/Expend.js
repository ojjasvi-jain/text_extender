import React from "react";

let ExpendText = ({ children, count = 50 }) => {
  const [ismore, setIsmore] = React.useState(false);
  if (children.length < count) return <p> {children} </p>;
  return (
    <>
      {!ismore ? children.slice(0, count) + "..." : children}
      <button type="button" onClick={() => setIsmore((state) => !state)}>
        {ismore ? "less" : "more"}
      </button>
    </>
  );
};

export default ExpendText;
