import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const [postData, setPostData] = useState();
function useFetchPost(url) {
//   const [postLoading, setPostLoading] = useState(false);
  useEffect(() => {
    // setPostLoading(true);
    fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: postData.target.elements.name.value,
          password: postData.target.elements.password.value,
        }),
      })
      .then((res) => res.json())
      .then( res => {
        if (res.success) {
            setPostData(res.status);
          console.log(res);
        //   navigate(`/Main`);
          toast.success(res.status);
        } else {
            setPostData(res.status);
        //   navigate(`/Error`);
          toast.error(res.status);
        }
      })
      .catch((res) => console.log(res))
      .finally((res) => console.log(res));
  }, []);
  return [postData];
}

export default useFetchPost;
