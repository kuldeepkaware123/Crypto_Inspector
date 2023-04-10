import React, { useState } from "react";
import { isAddress } from 'ethereum-address';

function ETHCheck() {
  const [useraddress, setAddress] = useState("");
  const [emessage ,setemessage] =useState(null) ;

  const validateAddress = () => {
    // try {
    //   setIsValidAddress(isAddress(useraddress));
    // } catch {
    //   setIsValidAddress(false);
    // }
    const result = isAddress(useraddress);
    if(result){
        setemessage(`This ETC address ${useraddress} is a valid Address`) ;
        
    }else{
        setemessage(`This ETC address ${useraddress} is a not valid Address`) ;
    }
    setAddress("");
  };

  return (
    <>
      <div className="container">
        <label htmlFor="username" className="label">
          <i class="fa-brands fa-ethereum"></i>
          <span> Ethereum Address:</span>
        </label>
        <div className="input-group">
          <input
            value={useraddress}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter Ethereum Address"
          />
          <button onClick={validateAddress} type="submit">
            Validate <i className="fa fa-check" />
          </button>
        </div>
        {emessage ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>This Ethereum Address </strong> {emessage}
            <button onClick={() => {
                setemessage(null);
              }}
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ETHCheck;
