import React, { useState } from "react";
import { validate } from "bitcoin-address-validation";
import "./checker.css";
import ETHCheck from "./Eth-checker";
function BTCCheck() {
  const [useraddress, setAddress] = useState("");
  const [emessage, setemessage] = useState(null);
  console.log("testing");
  const validateAddress = () => {
    // try {

    //   console.log(validate(useraddress));
    //   setIsValid(validate(useraddress));

    // } catch {
    //   setIsValid(false);
    // }
    const result = validate(useraddress);
    if (result) {
      setemessage(`${useraddress}is a valid Address`);
    } else {
      setemessage(`${useraddress} is a not valid Address`);
    }
    setAddress("");
   
  };

  return (
    <>
      <div className="container">
        <label htmlFor="username" className="label">
          <i className="fa-brands fa-bitcoin"></i>
          <span> Bitcoin Address:</span>
        </label>
        <div className="input-group">
          <input
            value={useraddress}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter BTC Address"
          />
          <button onClick={validateAddress}>
            Validate <i className="fa fa-check" />
          </button>
        </div>
        {emessage ? (
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>This BTC Address </strong> {emessage}
            <button onClick={()=>{ setemessage(null)}}>X</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <ETHCheck/>
    </>

  );
}

export default BTCCheck;
