import "./Navigation.css"

import '@fortawesome/fontawesome-free/css/all.css';
function Home(){
    return(
        <>
        <div className="container">
    <h2>Recommended Movies</h2>
    <div className="card">
      <a href="index.html">
        {" "}
        <img src="./src/images/image1.avif" />
      </a>
      <a href="index.html">
        {" "}
        <img src="./src/images/image2.avif" />
      </a>
      <a href="index.html">
        {" "}
        <img src="./src/images/image3.avif" />
      </a>
      <a href="index.html">
        {" "}
        <img src="./src/images/image4.avif" />
      </a>
      <a href="index.html">
        {" "}
        <img src="./src/images/image5.avif" />
      </a>
      {/* <img src="/images/image2.avif" alt="">
      <img src="/images/image3.avif" alt="">
      <img src="/images/image4.avif" alt="">
      <img src="/images/image5.avif" alt=""> */}
    </div>
  </div>
  <div className="banner">
    <img src="./src/images/banner.avif" alt="" />
  </div>
  <div className="container">
    <h2>The Best of Live Events</h2>
    <div className="card2">
      <img src="./src/images/live1.avif" alt="" />
      <img src="./src/images/live2.avif" alt="" />
      <img src="./src/images/live3.avif" alt="" />
      <img src="./src/images/live4.avif" alt="" />
      <img src="./src/images/live5.avif" alt="" />
    </div>
  </div>
  <div className="premiere">
    <h2>PREMIERE</h2>
    <div className="containers">
      <h2>PREMIERES</h2>
      <div className="card2">
        <img src="./src/images/premiere1.avif" alt="" />
        <img src="./src/images/premiere2.avif" alt="" />
        <img src="./src/images/premiere3.avif" alt="" />
        <img src="./src/images/premiere4.avif" alt="" />
        <img src="./src/images/premiere5.avif" alt="" />
      </div>
    </div>
  </div>
  <div className="footer">
    <img src="./src/images/logo.webp" alt="" />
    <div className="icon">
      <i className="fa-brands fa-facebook" />
      <i className="fa-brands fa-square-instagram" />
      <i className="fa-brands fa-twitter" />
      <i className="fa-brands fa-youtube" />
    </div>
  </div>
</>

    )
}
 export default Home;