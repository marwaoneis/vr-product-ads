import React from "react";
import "./style.css";

const InterestForm = () => {
  return (
    <div className="interest-form-container">
      <h2 className="title">INTERESTED IN VR ADS?</h2>
      <p>Fill out a short form and we will call you back</p>
      <div className="left-ball"></div>
      <div className="form-row">
        <div className="input-container">
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Phone Number"
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <button type="submit" className="submit-button">
          Call me back
        </button>
      </div>
      <label className="privacy-policy">
        <input type="checkbox" />I accept privacy policy
      </label>
      <h2 className="try">WANT TO TRY?</h2>
    </div>
  );
};

export default InterestForm;
