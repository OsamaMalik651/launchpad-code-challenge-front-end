import React from "react";

const Place = ({ place }) => {
  // const mapLocation =
  //   "https://maps.google.com/?q=" +
  //   place.places[0].latitude +
  //   "," +
  //   place.places[0].longitude;
  const mapLocation = "https://maps.google.com/?q=" + place["post code"];
  return (
    <div className="ui card padded">
      <div className="content">
        <div className="header">{place.country}</div>
        <div className="meta">
          {place.places[0].state}, {place["country abbreviation"]},{" "}
          {place["post code"]}
        </div>
        <div className="description">
          <h5>Places:</h5>
          <p>{place.places[0]["place name"]}</p>
          <p>
            Coordinates: {place.places[0].latitude},{place.places[0].longitude}
          </p>
          <a href={mapLocation} target="_blank">
            Show on Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Place;
