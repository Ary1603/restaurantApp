import React from "react";
import "./aboutus.css";
export function AboutUs() {
  return (
    <>
      <header>
        <img
          className="logo-img-about-us"
          src="https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-minimalismo-del-logo-del-corazon.png"
          alt=""
        />
        <h1 className="title-restaurant-name">Luxury Restaurant</h1>
      </header>

      <div className="container-about-us">
        <img
          className="about-us-img"
          src="https://media.istockphoto.com/photos/pizzeria-picture-id121689858?k=20&m=121689858&s=612x612&w=0&h=2XXgNU2XEGXhlXTjWNswwZ6iEz68qNCRIwZXEXwI7h0="
          alt=""
        />
        <p className="description-about-us">
          The key to progress is much similar to the key to improving a pizza –
          the more you put into it, the more you receive in return. Our pizza
          family is as eager for flawlessness today as we were at the point at
          which we originally opened our entryways over 40 years back. 
          <br />
          <br />
          Also,
          we’re headed to be the best at making creative new items and formulas.
          Quality is at our center. It’s the establishment we began with, from
          the main ‘Organization Name’ pizza that was made in a sweeper storage
          room in Manhattan, IN, to now in excess of 5,000 areas in 45 nations
          and regions around the globe. We don’t utilize shabby and increasingly
          prepared fixings. 
          <br />
          <br />
          Regardless of whether it’s our mark sauce, fixings,
          our unique new mixture, or even the case itself, we put resources into
          our fixings to guarantee that we generally give you the best quality
          pizza. For you, it’s not only a superior pizza. It’s a family
          assembly, an important birthday, a work festivity, or basically an
          incredible supper. It’s our objective to ensure you generally have the
          best elements for each event.
        </p>
      </div>
    </>
  );
}
