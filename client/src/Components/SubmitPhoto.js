import React from "react";
import piexif from 'piexifjs';

function SubmitPhoto() {
    function handleSubmit(event) {
      event.preventDefault();
      // console.log(event.target[0].files[0]);
      const imageFile = event.target[0].files[0];
  
      encodeFileBase64(imageFile);
    };
    
    function encodeFileBase64( file ) {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          const Base64 = reader.result;
          //convert binary to base64
          // console.log(Base64);
          //use piexif.load on base64 here!
          console.log(piexif.load(Base64));
          const newImageExif = piexif.load(Base64);
          console.log(newImageExif['GPS'][piexif.GPSIFD.GPSLatitude])
          console.log(newImageExif['GPS'][piexif.GPSIFD.GPSLongitude])

          return newImageExif
        };
        reader.onerror = ( error ) => {
          console.log("error: ", error);
        };
      }
    };
    
      return (
        <div className="submitphoto">
          <form onSubmit={handleSubmit}>
            <label>
              Upload File:
            <input type="file" accept="image/*"/>
            </label>
            <br/>
            <button type={"submit"}>Submit</button>
          </form>
        </div>
    );
}

export default SubmitPhoto;