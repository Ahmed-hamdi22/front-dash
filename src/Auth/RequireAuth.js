import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { USER } from "../Api/Api";
import Loading from "./Loading";
import { Axois } from "../Api/Axois";
import Err403 from "./403";
export default function RequireAuth({ allowedRole }) {
  // user
  const [user, setuser] = useState("");
  console.log(user);
  const Navigate = useNavigate();
  useEffect(() => {
    Axois.get(`/${USER}`)
      .then((data) => setuser(data.data))
      // .then((data)=> console.log(data))
      .catch(() => Navigate("/login", { replace: true }));
  }, []);
  const cookie = Cookie();
  const token = cookie.get("e-commerce");

  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Err403 role={user.role} />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}

// return token ? (
//     user === "" ? (
//      <Loading/>
//      ) : (
//          <Outlet/>

//      )
//          ) : (
//          <Navigate to={'/login'} replace={true}/>
//          );
// }
