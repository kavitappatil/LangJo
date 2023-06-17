import React from "react";
import "./LogIn.css";
import langJo from "../Images/langJo.png";

function LogIn() {
  return (
    <section className="background vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black card-color">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                    <p className="text-start h2 sign_up-heading fw-bold p-2">
                      Login
                    </p>
                    <span className="form-group d-flex flex-row p-2">
                      Sign up as a student{" "}
                    </span>
                    &nbsp;
                    <form>
                      <div className="form-group">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleInputEmail1">Email address</label>
                        </div>
                        <input
                          type="email"
                          className="form-control w-75"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      &nbsp;
                      <div className="form-group">
                        <div className="d-flex flex-row p-2">
                          <label for="exampleInputPassword1">Password</label>
                        </div>
                        <input
                          type="password"
                          className="form-control w-75"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <br />
                      <div className="row d-flex justify-content-start p-3">
                        <button type="submit" className="btn sign_up-btn w-75">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-2">
                    <img
                      src={langJo}
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
              <div>
                By clicking Continue with or Log in, you agree to LangJo <br />
                <span className="font-weight-bold">
                  Terms of Service and Privacy Policy
                </span>
                &nbsp; &nbsp;
              </div>
              <span className="font-weight-bold">&nbsp; &nbsp; </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
