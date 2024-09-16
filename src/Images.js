import React from "react";

export default function Images(props) {
  if (props.images) {
    const imagesNum = props.images.slice(0, 5); // Only slice after confirming images exist
    return (
      <section>
        {imagesNum.map(function (image, index) {
          return (
            <img
              key={index} // Add the key to avoid React warnings
              src={image.src.original} // Use the correct image URL
              alt={image.alt} // Alt text for accessibility
              style={{ maxWidth: "100%", height: "auto", transform: "scale(0.5)" }} // Image styling
            />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
