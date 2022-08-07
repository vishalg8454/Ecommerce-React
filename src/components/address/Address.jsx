import { useState } from "react";
import "./address.css";
// import { useToast } from "../../context/toast-context";
import { useToast } from "../../context";

const initalAddress = {
  fullName: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  mobileNumber: "",
};

const fetchFromLocalStorage = () => {
  const savedAddress = localStorage.getItem("address");
  if (savedAddress) return JSON.parse(savedAddress);
  return null;
};

export const Address = () => {
  const [disabled, setDisabled] = useState(true);
  const { showToast } = useToast();
  const saveToLocalStorage = (obj) => {
    localStorage.setItem("address", JSON.stringify(obj));
    showToast({
      message: `Address set successfully.`,
      type: "success",
    });
  };
  const [address, setAddress] = useState(
    fetchFromLocalStorage() ? fetchFromLocalStorage() : initalAddress
  );
  const onChange = (e) => {
    setAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form className="form-wrapper">
      Customer Address
      <label className="input-label" htmlFor="fullName">
        Full Name
      </label>
      <input
        className="input"
        type="text"
        name="fullName"
        id="fullName"
        required
        value={address.fullName}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="input-label" htmlFor="street">
        Street
      </label>
      <input
        className="input"
        type="text"
        name="street"
        id="street"
        required
        value={address.street}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="input-label" htmlFor="city">
        City
      </label>
      <input
        className="input"
        type="text"
        name="city"
        id="city"
        required
        value={address.city}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="input-label" htmlFor="state">
        State
      </label>
      <input
        className="input"
        type="text"
        name="state"
        id="state"
        required
        value={address.state}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="input-label" htmlFor="pincode">
        Pincode
      </label>
      <input
        className="input"
        type="text"
        name="pincode"
        id="pincode"
        required
        value={address.pincode}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="input-label" htmlFor="mobileNumber">
        Mobile Number
      </label>
      <input
        className="input"
        type="text"
        name="mobileNumber"
        id="mobileNumber"
        required
        value={address.mobileNumber}
        onChange={onChange}
        disabled={disabled}
      />
      {disabled && (
        <button
          className="btn btn-primary-solid btn-login"
          onClick={(e) => {
            setDisabled(false);
          }}
        >
          Edit
        </button>
      )}
      {!disabled && (
        <button
          className="btn btn-primary-solid btn-login"
          onClick={(e) => {
            setDisabled(true);
            saveToLocalStorage(address);
          }}
        >
          Save
        </button>
      )}
    </form>
  );
};
