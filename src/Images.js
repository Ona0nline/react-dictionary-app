import React from "react";

export default function Images(props) {
  if (props.images) {
    const imagesNum = props.images.slice(0, 3); // Only slice after confirming images exist
    return (
      <section>
        <div className="row">
           {imagesNum.map(function (image, index) {
          return (
            <div className="col-4">
              <a href={image.src.original} target="_blank" rel="noreferrer">
                 <img
                 className="img-fluid"
              key={index} // Add the key to avoid React warnings
              src={image.src.original} // Use the correct image URL
              alt={image.alt} // Alt text for accessibility
              style={{ maxWidth: "100%", height: "auto", transform: "scale(0.6)" }} // Image styling
            />
              </a>
             
            </div>
            
          );
        })}
        </div>
       
      </section>
    );
  } else {
    return null;
  }
}
