import useFetch from "./useFetch";
import useFetchPost from "./useFetchPost";
import Loading from "./Loading";
import { useState } from "react";
import Link from "./Links";
import moment from "moment";
// import Login from "./Login";
import {Button,Modal,Form} from 'react-bootstrap'
// import { toast } from "react-toastify";

function Main() {
  // const [loading , setLoading] = useState(false)
  const [data, loading] = useFetch("https://randomuser.me/api");
  const [postData] = useFetchPost("https://dev-api.mstars.mn/admin/login")
  const names = ["youtube", "google", "facebook"];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [select, setSelect] = useState(names[1]);
  function submitHandler(e) {
    e.preventDefault();
    
  }
    // console.log(props.status);
  const style = {
    link: {
      backgroundColor: "black",
      color: "white",
      justifyContent: "space-around",
      display: "flex",
    },
    outer: {
      textAlign: "center",
    },
    inside: {
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
    },
    img: {
      borderRadius: "50%",
    },
  };
  // console.log(data);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  const now = new Date();
  return (
    <div style={style.outer}>
      {/* {toast.success("amjilttai")} */}
      <div className="d-flex" style={style.inside}>
        <div style={style.outer}>Firstname: {data?.results[0].name.first}</div>
        <div style={style.outer}>Lastname: {data?.results[0].name.last}</div>
        <div>
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
            {/* <div>{status}</div> */}
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
      </div>
      <div>Phone : {data?.results[0].cell}</div>
      <img src={data?.results[0].picture.large} alt="aas" style={style.img} />
      <div>
        Age:{" "}
        {moment(now).format("YYYY") -
          moment(data?.results[0].dob.date).format("YYYY")}
      </div>
      <div className="d-flex">
        {names.map((name, i) => {
          return (
            <Link
              style={style.outer}
              name={name}
              key={i}
              isSelected={select === name}
              onClick={() => setSelect(name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
