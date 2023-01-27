import React from "react";

const Input = (props, ref) => {
  const { titel, value, onChange } = props;
  return (
    <>
      <div>
        <label>{titel} :</label>
        <input ref={ref} type="text" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default React.forwardRef(Input);
