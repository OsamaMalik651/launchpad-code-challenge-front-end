import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCountries, fetchUniversities } from "../actions";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import University from "./University";

const Universities = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const universities = useSelector((state) => state.universities);

  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [universitiesList, setUniversitiesList] = useState([]);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    if (countries && Object.keys(countries).length) {
      const list = Object.keys(countries)
        .map((ex) => countries[ex]["country"])
        .sort();
      setCountriesList(list);
    }
  }, [countries]);

  useEffect(() => {
    if (selectedCountry) {
      setUniversitiesList([]);
      dispatch(fetchUniversities(selectedCountry));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (universities.length && Object.keys(universities).length) {
      setUniversitiesList([]);
      setUniversitiesList(universities);
    }
  }, [universities]);
  return (
    <div className="ui center aligned container">
      <h3>To view universities, select a country</h3>
      <div className="ui segment">
        <Dropdown
          placeholder="Select a country"
          options={countriesList}
          value="one"
          onSelect={(value) => setSelectedCountry(value.value)} // always fires once a selection happens even if there is no change
        />
      </div>
      <div className="ui segment">
        {selectedCountry ? (
          <div className="ui container">
            <h3> Selected Country: {selectedCountry}</h3>
            <h5>Number of Universities : {universitiesList.length}</h5>
            <div
              className="ui segment"
              style={{ overflow: "auto", minHeight: "50vh", maxHeight: "90vh" }}
            >
              <div className="ui grid centered">
                {selectedCountry ? (
                  <div className="ui two column very releaxed stackable grid">
                    <University list={universitiesList} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* <div
        className="ui segment"
        style={{ overflow: "auto", minHeight: "50vh", maxHeight: "90vh" }}
      >
        <div className="ui grid centered">
          {selectedCountry ? (
            <div className="ui two column very releaxed stackable grid">
              <University list={universitiesList} />
            </div>
          ) : null}
        </div>
      </div> */}
    </div>
  );
};

export default Universities;
