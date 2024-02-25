import "../styles/kirtankarcard.css";
import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
import { toast } from "react-hot-toast";
import Kirtankars from "../pages/Kirtankars";

const KirtankarCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="tradition">
        <strong>Tradition: </strong>
        {ele?.tradition}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per Kirtan: </strong>₹ {ele?.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.userId?.mobile}
      </p>
      <button className="btn appointment-btn" onClick={handleModal}>
        Book Kirtankar
      </button>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default KirtankarCard;
