function Register(){
    return(
        <>
        <div className="container">
        <div
          className="container text-center mt-4"
          style={{ backgroundColor: "rgb(75, 78, 117)" }}
        >
          <h2 style={{ color: "white" }}>Recent Movie</h2>
        </div>
        {/* <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data"> */}
        <form onsubmit="submitHandler(event) ">
          <input
            type="text"
            id="Mname"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Name of the movie"
          />
          <br />
          {/* <input type="text" id="category" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Name of the movie"><br> */}
          <textarea
            className="form-control"
            placeholder="Leave a details of the movie"
            id="data"
            defaultValue={""}
          />
          <br />
          <input type="file" name="myfile" id="myfile" />
          <br />
          <input
            type="submit"
            className="mt-3"
            defaultValue="upload"
            style={{
              backgroundColor: "cornflowerblue",
              color: "white",
              padding: 10,
              border: 0
            }}
          />
        </form>
      </div>
      </>
    )
}
 export default Register;