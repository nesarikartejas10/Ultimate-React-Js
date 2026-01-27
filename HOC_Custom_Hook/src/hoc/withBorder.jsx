const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <div
        style={{
          border: "1px solid yellow",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBorder;
