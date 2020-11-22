import React from "react";

export default function CustomerPickUpForm(props) {
  return (
    <div>
      <form style={{ textAlign: "center" }}>
        <h4>Select Day/Pick Up Time</h4>
        <div className="uk-margin">
          <div uk-form-custom="target: > * > span:first-child">
            <select value={props.orderDate} onChange={props.handleSelectDay}>
              <option value="">Please select Day...</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <button
              className="uk-button uk-button-default"
              type="button"
              tabindex="-1"
            >
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>
        </div>
        <div className="uk-margin">
          <label for="appt">Choose a time for your meeting:</label>
          <input
            type="time"
            id="appt"
            name="appt"
            value={props.orderTime}
            onChange={props.handleSelectTime}
            min="09:00"
            max="18:00"
            required
          />
          <br></br>
        </div>
      </form>
    </div>
  );
}
