import useFetch from "./useFetch";
import Loading from "./Loading";
import { useState } from "react";
import Link from "./Links";
import moment from "moment";
import Login from "./Login";
import { toast } from "react-toastify";

function Main() {
  const [data, loading] = useFetch("https://randomuser.me/api");
  const names = ["youtube", "google", "facebook"];
  const [select, setSelect] = useState(names[1]);

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
  };
  console.log(data);

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
        <button>Logout</button>
      </div>
      <div>{data?.results[0].cell}</div>
      <img src={data?.results[0].picture.large} alt="aas" />
      <div>
        Date of birth:{" "}
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
