import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode } = useContext(Context);
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const { data } = await axios.post(
        "https://blog-backend-deployment.onrender.com/api/v1/user/subscribe",
        { email }
      );
      toast.success(data.message);
      setEmail("");  
    } catch (error) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : "An error occurred. Please try again."
      );  
    }
  };

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Welcome to ECHO VERSE, where your voice finds its perfect resonance
            in the digital world. ECHO VERSE is a cutting-edge blogging platform
            designed to empower writers, thinkers, and creatives to share their
            ideas with a global audience.
          </p>
          <p>
            <span>Email:</span>ev@gmail.com
          </p>
          <p>
            <span>Phone:</span>+918542050782
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>

        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input
              type="text"
              placeholder={`Your Email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          © 2024 <span>ECHOVERSE</span>
        </div>
        <div className="links">
          <Link to={"https://www.instagram.com/princeessjay"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/princeessjay"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link
            to={"https://www.youtube.com/@vikaskashyap3651"}
            target="_blank"
          >
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/vikas-kashyap8542"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
