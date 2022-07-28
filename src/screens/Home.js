import React, { useState, useEffect } from "react";
import "./Login";
import db from "../firebase";
import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

const Home = ({ name, admin }) => {
  const [youtube, setYoutube] = useState("");
  const [fetchedYoutube, setFetchedYoutube] = useState("");
  const [active, setActive] = useState(false);

  async function fetchData() {
    const ytref = doc(db, "youtube", "y1P8uU6NUvL5zNWwoAgb");
    const ytsnap = await getDoc(ytref);
    setFetchedYoutube(ytsnap.data().link);
    setActive(ytsnap.data().active);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(youtube);
  // }, [youtube]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // return console.log("hello world");
    const ytref = doc(db, "youtube", "y1P8uU6NUvL5zNWwoAgb");
    await updateDoc(ytref, {
      link: youtube,
      active: true
    });
    fetchData();
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const ytref = doc(db, "youtube", "y1P8uU6NUvL5zNWwoAgb");
    await updateDoc(ytref, {
      active: false
    });
    fetchData();
  };

  return (
    <>
      <nav
        className="navbar navbar-custom navbar-expand-lg navbar-light"
        style={{ background: "#f8f1ed" }}
      >
        <div className="container-fluid ">
          <div className="flex2 d-flex justify-content-between align-items-center w-100">
            <div className="col-lg-6 col-md-6 col-12">
              <a
                className=" navbar-brand d-inline-flex align-items-center"
                href="Login"
                style={{ marginLeft: "10px" }}
              >
                <img src="/img/logo.png" alt="logo" style={{ width: "75px" }} />
                <div className="flex" style={{ marginLeft: "25px" }}>
                  <h2>Anjuman-e-Hatimi</h2>
                  <h5 className="heading" style={{ float: "right" }}>
                    Ibrahimi Mohalla Ujjain
                  </h5>
                </div>
              </a>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", width: "100%" }}
              >
                {admin() === true ? (
                  <>
                    <input
                      type="text"
                      placeholder="Enter youtube link"
                      name="youtube"
                      value={youtube}
                      onChange={(e) => setYoutube(e.target.value)}
                      className="form-control"
                    />

                    <input
                      type="submit"
                      value="Done"
                      name="submit"
                      className="btn btn-primary btn-sm mx-2"
                    />
                  </>
                ) : null}
              </form>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h5 className="name">Name : {name}</h5>
              <a href="/">
                <div className="logout">
                  <button
                    className="btn align-self-end btn-lg mx-4"
                    type="submit"
                    value="Logout"
                    name="submit"
                    style={{ background: "#503523", color: "white" }}
                  >
                    {" "}
                    Logout{" "}
                  </button>
                </div>
                {admin() && active && (
                  <div className="logout">
                    <button
                      className="btn align-self-end btn-lg mx-4"
                      type="button"
                      onClick={handleClick}
                      style={{ background: "red", color: "white" }}
                    >
                      {" "}
                      Finish Event{" "}
                    </button>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section id="hero">
        <div className="container full-height">
          <div className="row align-items-center justify-content-center full-height col-md-10 col-12 mx-auto my-auto">
            <div className="youtube">
              {active ? (
                <iframe
                  width="560"
                  height="315"
                  src={fetchedYoutube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <h1 style={{ fontSize: "3rem" }}>No Current Events </h1>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="footer tile" style={{ width: "100%" }}>
        <div className="container">
          <div className="row flex-align-items-center justify-content-center text-center col-md-12 col-12">
            <p className="footerText">
              © 2021 Anjuman-E-Hatimi - All rights reserved.
              <br />
              <span>
                Designed and developed by<b> Mustafa Panjiwala</b>.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
