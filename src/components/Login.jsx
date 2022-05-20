import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    fetch("https://dev-api.mstars.mn/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.elements.name.value,
        password: e.target.elements.password.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setStatus(res.status);
          navigate(`/Main`);
          toast.success(res.status);
          console.log(res);
        } else {
          setStatus(res.status);
          navigate(`/Error`);
          toast.error(res.status);
        }
      });
  }
  const style = {
    form: {
      textAlign: "center",
      width: "20vw",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <form
        style={style.form}
        action=""
        method="get"
        className="form-example"
        onSubmit={submitHandler}
      >
        <div className="form-example">
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-example">
          <label htmlFor="password">Enter your password: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-example">
          <button type="submit">submit</button>
        </div>
      </form>
      <p>{status}</p>
    </>
  );
}

export default Login;

// "https://dev-api.mstars.mn/admin/login/register"
