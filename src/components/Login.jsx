import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Modal,Form } from "react-bootstrap";
function Login(props) {
  const [status, setStatus] = useState();
  // const [alrt , setAlrt] = useState();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      .then((res) => {
        
        res.json()})
      .then((res) => {
        if (res.success) {
          setStatus(res.status);
          console.log(res);
          navigate(`/Main`);
          toast.success(res.status);
        } else {
          setStatus(res.status);
          navigate(`/Error`);
          toast.error(res.status);
        }
      });
  }
  // console.log(props);
  const style = {
    form: {
      textAlign: "center",
      width: "10vw",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      height: "20vh",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div status={status} >
      <Button variant="secondary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter user pass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
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
            <div>{status}</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Login;

// "https://dev-api.mstars.mn/admin/login/register"
