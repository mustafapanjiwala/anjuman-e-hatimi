import React, { useState } from "react";
import data from "../loginData.json";
import Home from "./Home";

const Login = () => {
  const [its, setIts] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   // const ref = collection(db, "youtube");
  //   // getDocs(ref).then((res) => {
  //   //   const link = res.docs.map((doc) => {
  //   //     return { data: doc.data(), id: doc.id };
  //   //   });
  //   //   console.log(link);
  //   // });
  //   async function fetchData() {
  //     const ytref = doc(db, "youtube", "y1P8uU6NUvL5zNWwoAgb");
  //     await updateDoc(ytref, {
  //       link: "hello",
  //       active: false
  //     });
  //   }
  //   fetchData();
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data[its] || data[its].password !== password) {
      console.log("incorrect");
      setError(true);
    } else {
      setLoggedIn(true);
      console.log("correct");
    }
  };
  const admin = () => {
    if (data[its] !== "12345678" && data[its].password !== "password") {
      return false;
    } else {
      return true;
    }
  };

  if (loggedIn) return <Home name={data[its].name} admin={admin} />;
  return (
    <>
      <div className="container-fluid " style={{ background: "#F8F1ED" }}>
        <div className="row content px-0">
          <div className="loginLeft col-sm-6 px-0">
            <nav className="navbar navbar-custom navbar-expand-lg navbar-light flex justify-content-between ">
              <div className="container-fluid">
                <a
                  className=" navbar-brand d-inline-flex align-items-center w-100 justify-content-between"
                  href="index.php"
                  style={{ marginLeft: "10px", width: "100%" }}
                >
                  <img src="/img/logo.png" alt="logo" />
                  <div className="flex">
                    <h2>Anjuman-e-Hatimi</h2>
                    <h5 className="heading" style={{ float: "right" }}>
                      Ibrahmi Mohalla Ujjain
                    </h5>
                  </div>
                </a>
              </div>
            </nav>

            <section id="hero">
              <div className="container full-height w-100">
                <div className="row align-items-center justify-content-center full-height mx-auto my-auto logbox">
                  <div className="loginbox">
                    <h2>Login for Majlis Relay</h2>
                    {error && (
                      <p className="error">Incorrect ITS id or Password</p>
                    )}
                    <form
                      onSubmit={handleSubmit}
                      method="POST"
                      style={{ padding: "0px 20px 0px 5px" }}
                    >
                      <input
                        type="text"
                        placeholder="Enter ITS"
                        name="its"
                        value={its}
                        onChange={(e) => setIts(e.target.value)}
                      />

                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <br></br>
                      <input type="submit" value="Login" name="submit" />
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section className="footer">
              <div className="container">
                <div className="row text-center col-md-12 col-12">
                  <p>
                    © 2021 Anjuman-E-Hatimi - All rights reserved.<br></br>
                    <span>
                      Designed and developed by<b> Mustafa Panjiwala</b>.
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="col-sm-6 px-0 loginRight"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
