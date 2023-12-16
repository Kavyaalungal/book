// function Register(){


//     return(
//         <>
//         <div className="container">
//         <div
//           className="container text-center mt-4"
//           style={{ backgroundColor: "rgb(75, 78, 117)" }}
//         >
//           <h2 style={{ color: "white" }}>Recent Movie</h2>
//         </div>
//         {/* <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data"> */}
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             id="Mname"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             placeholder="Name of the movie"
//           />
//           <br />
//           {/* <input type="text" id="category" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Name of the movie"><br> */}
//           <textarea
//             className="form-control"
//             placeholder="Leave a details of the movie"
//             id="data"
//             defaultValue={""}
//           />
//           <br />
//           <input type="file" name="myfile" id="myfile" />
//           <br />
//           <input
//             type="submit"
//             className="mt-3"
//             defaultValue="upload"
//             style={{
//               backgroundColor: "cornflowerblue",
//               color: "white",
//               padding: 10,
//               border: 0
//             }}
//           />
//         </form>
//       </div>
//       </>
//     )
// }
//  export default Register;


// import React from 'react';

// function Register() {
//   const submitHandler = (event) => {
//     event.preventDefault();

    
//     const movieName = document.getElementById('Mname').value;
//     const movieDetails = document.getElementById('data').value;
//     const fileInput = document.getElementById('myfile');
//     const selectedFile = fileInput.files[0];

    
//     console.log('Movie Name:', movieName);
//     console.log('Movie Details:', movieDetails);
//     console.log('Selected File:', selectedFile);

 
//     event.target.reset();
//   };

//   return (
//     <>
//       <div className="container">
//         <div
//           className="container text-center mt-4"
//           style={{ backgroundColor: "rgb(75, 78, 117)" }}
//         >
//           <h2 style={{ color: "white" }}>Recent Movie</h2>
//         </div>
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             id="Mname"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             placeholder="Name of the movie"
//           />
//           <br />
//           <textarea
//             className="form-control"
//             placeholder="Leave details of the movie"
//             id="data"
//             defaultValue={""}
//           />
//           <br />
//           <input type="file" name="myfile" id="myfile" />
//           <br />
//           <input
//             type="submit"
//             className="mt-3"
//             value="Upload"
//             style={{
//               backgroundColor: "cornflowerblue",
//               color: "white",
//               padding: 10,
//               border: 0
// import React from 'react';

// function Register() {
//   const submitHandler = (event) => {
//     event.preventDefault();

    
//     const movieName = document.getElementById('Mname').value;
//     const movieDetails = document.getElementById('data').value;
//     const fileInput = document.getElementById('myfile');
//     const selectedFile = fileInput.files[0];

    
//     console.log('Movie Name:', movieName);
//     console.log('Movie Details:', movieDetails);
//     console.log('Selected File:', selectedFile);

 
//     event.target.reset();
//   };

//   return (
//     <>
//       <div className="container">
//         <div
//           className="container text-center mt-4"
//           style={{ backgroundColor: "rgb(75, 78, 117)" }}
//         >
//           <h2 style={{ color: "white" }}>Recent Movie</h2>
//         </div>
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             id="Mname"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             placeholder="Name of the movie"
//           />
//           <br />
//           <textarea
//             className="form-control"
//             placeholder="Leave details of the movie"
//             id="data"
//             defaultValue={""}
//           />
//           <br />
//           <input type="file" name="myfile" id="myfile" />
//           <br />
//           <input
//             type="submit"
//             className="mt-3"
//             value="Upload"
//             style={{
//               backgroundColor: "cornflowerblue",
//               color: "white",
//               padding: 10,
//               border: 0
//             }}
//           />
//         </form>
//       </div>
//     </>
//   );
// }

// export default Register;

import React from 'react';
import axios from 'axios';

function Register() {
  const submitHandler = async (event) => {
    event.preventDefault();

    const movieName = document.getElementById('Mname').value;
    const movieDetails = document.getElementById('data').value;
    const fileInput = document.getElementById('myfile');
    const selectedFile = fileInput.files[0];

    const formData = new FormData();
    formData.append('Mname', movieName);
    formData.append('data', movieDetails);
    formData.append('myfile', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert("movie added successfully");
        console.log('Movie successfully uploaded');
       
        event.target.reset();
      } else {
        console.error('Failed to upload movie');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="container text-center mt-4"
          style={{ backgroundColor: "rgb(75, 78, 117)" }}
        >
          <h2 style={{ color: "white" }}>Recent Movie</h2>
        </div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="Mname"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Name of the movie"
          />
          <br />
          <textarea
            className="form-control"
            placeholder="Leave details of the movie"
            id="data"
            defaultValue={""}
          />
          <br />
          <input type="file" name="myfile" id="myfile" />
          <br />
          <button
            type="submit"
            className="mt-3"
            style={{
              backgroundColor: "cornflowerblue",
              color: "white",
              padding: 10,
              border: 0
            }}
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;

