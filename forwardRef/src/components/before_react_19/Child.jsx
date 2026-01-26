import { forwardRef } from "react";

const Child = (props, ref) => {
  return <input type="text" ref={ref} {...props} />;
};

export default forwardRef(Child);
