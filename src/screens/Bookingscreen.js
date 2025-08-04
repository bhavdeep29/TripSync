import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import StripeCheckout from 'react-stripe-checkout';
import Swal from "sweetalert2";

function BookingScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [places, setPlaces] = useState();
  const [dateError, setDateError] = useState(null);
  let { id, fromDate, toDate } = useParams();
  const navigate = useNavigate();

  // Convert URL date strings to moment objects
  const firstDate = moment(fromDate, "DD-MM-YYYY");
  const lastDate = moment(toDate, "DD-MM-YYYY");
  const today = moment().startOf('day'); // Today's date at midnight

  // Validate dates on component mount
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      window.location.href = "/register";
      return;
    }

    // Date validation
    if (!firstDate.isValid() || !lastDate.isValid()) {
      setDateError("Invalid date format");
      return;
    }

    if (firstDate.isBefore(today)) {
      setDateError("From date cannot be in the past");
      return;
    }

    if (lastDate.isBefore(today)) {
      setDateError("To date cannot be in the past");
      return;
    }

    if (lastDate.isBefore(firstDate)) {
      setDateError("To date cannot be before From date");
      return;
    }

    // If dates are valid, fetch place data
    fetchData();
  }, []);

  const totalDays = moment.duration(lastDate.diff(firstDate)).asDays() + 1;
  const [totalAmount, setTotalAmount] = useState();

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/places/getPlaceById", { placesid: id });
      setTotalAmount(data.rentperday * totalDays);
      setPlaces(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  async function onToken(token) {
    if (dateError) {
      Swal.fire("Error", "Please fix date errors before booking", "error");
      return;
    }

    console.log(token);
    const bookingDetails = {
      places,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token,
    };

    try {
      setLoading(true);
      await axios.post("/api/bookings/bookplace", bookingDetails);
      setLoading(false);
      Swal.fire("Congratulations", "Your Room Booked Successfully", "success").then((result) => {
        window.location.href = "/profile";
      });
    } catch (error) {
      setLoading(false);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  // If there's a date error, show error and redirect
  if (dateError) {
    return (
      <div className="container">
        <div className="alert alert-danger mt-5">
          <h3>Invalid Booking Dates</h3>
          <p>{dateError}</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate(-1)} // Go back to previous page
          >
            Select New Dates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : places ? (
        <div>
          <div className="details">
            <div className="booking-row bs" >
              <div className="left">
                <img src={places.imageurls[0]} alt="img" />
              </div>
              <div className="right">
                <div className="cont" style={{ textAlign: "right" }}>
                  <h1>Booking Details</h1>
                  <hr />
                  <h4>{places.name}</h4>
                  <b>
                    <p>Name: {JSON.parse(localStorage.getItem("currentUser")).name}</p>
                    <p>From Date: {fromDate}</p>
                    <p>To Date: {toDate}</p>
                    <p>Max Count: {places.maxcount}</p>
                  </b>
                  <h1>Amount</h1>
                  <hr />
                  <b>
                    <p>Total days: {totalDays}</p>
                    <p>Rent per day: {places.rentperday}</p>
                    <p>Total Amount: {totalAmount}</p>
                  </b>
                  <StripeCheckout
                    amount={totalAmount * 100}
                    token={onToken}
                    currency="INR"
                    stripeKey="pk_test_51MjMdXSB50ekGdkVXZoXT6N3ajezCvH2N1r5BP5OduMERgjJb41lEPsDNSbRg0sXPY2Ktj2iGPudIo29sXnkFrxT00p5jkAWGc"
                  >
                    <button className="pay">Pay Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
      <br />
    </div>
  );
}

export default BookingScreen;