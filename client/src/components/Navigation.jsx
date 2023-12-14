import "./Navigation.css"
import { Link } from "react-router-dom";


function Navigation(){
    return(
        <>
         <nav className="fnav">
    <div className="left">
      <img src="./src/images/logo.webp" alt="" />
      <input
        type="text"
        name=""
        id=""
        placeholder="search for movies, events, plays and more"
      />
    </div>
    <div className="right">
      <p>Location</p>
      {/* <input type="submit" value="Register"> */}
      {/* <button><a href="register.html"></a>Register</button> */}
     <button>
        <a
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Register
        </a>
      </button>
      <i className="fa-solid fa-bars" />
    </div>
  </nav>
  <nav className="sec-nav">
    <div className="s-left">
      <p>Movies</p>
      <p>Stream</p>
      <p>Events</p>
      <p>Plays</p>
      <p>Sports</p>
      <p>Activities</p>
      <p>Buzz</p>
    </div>
    <div className="s-right">
      <p>ListYourShow</p>
      <p>Corporates</p>
      <p>Offer</p>
      <p>Gift Cards</p>
    </div>
  </nav>
  <div className="main">
    <img src="./src/images/main.avif" alt="" />
  </div>
        </>
    )

}
 export  default Navigation;