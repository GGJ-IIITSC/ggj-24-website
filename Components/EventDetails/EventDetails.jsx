import React from "react";
import "./EventDetails.css"; // Don't forget to import your stylesheet

const EventDetails = () => {
  return (
    <div className="Main_container">
      <div className="empty_container"></div>
      <div className="Event_container">
        <div className="event_heading_container">
          <p className="event_heading">EVENT DETAILS</p>
        </div>
        <div className="schedule_container">
          <div className="schedule">
            <p className="schedule_heading">SCHEDULE</p>
          </div>
          <div className="event_payment">
            <i className="fa-regular fa-location-dot"></i>
            <p className="payment_heading">VENUE: IIIT SRICITY</p>
          </div>
          <div className="event_fee">
            <p className="fee_heading">DATE: 25th - 28th JAN 2024</p>
          </div>
          <div className="QR_Fee">
            <p className="QR_heading">TIMINGS: 5PM ONWARDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
