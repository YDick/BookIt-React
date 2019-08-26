import React from "react";

function Form(props) {

  console.log("hello formmmm::::::::::::::::::");
  return (
    <React.Fragment>
      <br /> <br />
      <form >
        <label>
          <input
            placeholder=" Street address "
            type="text"
            name="street number"
            value={props.streetAddress}
            onChange={event => {
              props.dataChange({streetAddress:event.target.value})
            }}
          />
        </label>

        <label>
          <input
            placeholder="City"
            type="text"
            name="city"
            value={props.city}
            onChange={event => {
              props.dataChange({city:event.target.value})
            }}
          />
        </label>
        <label>
          <input
            placeholder="Postal Code"
            type="text"
            name="postal code"
            value={props.postalCode}
            onChange={event => {
              props.dataChange({postalCode:event.target.value})
            }}
          />
        </label>
        <button
          value="Submit"
          onClick={e => {
            e.preventDefault();
            // console.log("DATA::", {
            //   streetAddress: streetAddress || "ppp",
            //   city: city,
            //   postalCode: postalCode
            // });

            props.submit({
            //   streetAddress: props.streetAddress,
            //   city: props.city,
            //   postalCode: props.postalCode
            });
          }}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
export default Form;
