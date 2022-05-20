function Loading() {
  const style = {
    outer: {
      position: "fixed",
      backgroundColor: "rgba(60, 60, 60 ,0.2)",
      width: "100vw",
      height: "100vh",
      color: "white",
    },
    p: {
      textAlign: "center",
      fontSize: "200px",
    },
  };
  return (
    <div style={style.outer}>
      <p style={style.p}>Loading</p>
    </div>
  );
}

export default Loading;
