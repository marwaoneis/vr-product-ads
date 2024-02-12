import React from "react";
import "./style.css";

const InterestForm = () => {
  return (
    <div className="interest-form-container">
      <h2>INTERESTED IN VR ADS?</h2>
      <p>Fill out a short form and we will call you back</p>
      <form className="interest-form">
        <input
          type="text"
          placeholder="Jessica Brown"
          className="input-field"
        />
        <input
          type="text"
          placeholder="+40 842 82 21 129"
          className="input-field"
        />
        <input
          type="email"
          placeholder="jessbr@gmail.com"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Call me back
        </button>
        <label className="privacy-policy">
          <input type="checkbox" />I accept privacy policy
        </label>
      </form>
    </div>
  );
};

export default InterestForm;
