import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ApplyKirtankar = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    tradition: "",
    experience: "",
    fees: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
    console.log(formDetails);
  };

  const btnClick = async (e) => {
    e.preventDefault();
    console.log("The appication data is ", formDetails);
    try {
      await toast.promise(
        axios.post(
          "/kirtankar/applyforkirtankar",
          {
            formDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Kirtankar application sent successfully",
          error: "Unable to send Kirtankar application",
          loading: "Sending Kirtankar application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="register-section flex-center apply-kirtankar"
        id="contact"
      >
        <div className="register-container flex-center contact">
          <h2 className="form-heading">Apply for Kirtankar</h2>
          <form className="register-form ">
            <select
              name="tradition"
              className="form-input"
              value={formDetails.tradition}
              onChange={inputChange}
            >
              <option value="">Choose your kirtan tradition</option>
              <option value="Varakari">Varakari</option>
              <option value="Naradiya">Naradiya</option>
              <option value="Ramadasi">Ramadasi</option>
              <option value="Ganapatya">Ganapatya</option>
              <option value="Shakta">Shakta</option>
              <option value="National">National</option>
              <option value="Chatai">Chatai (Pathkirtan)</option>
            </select>

            <input
              type="number"
              name="experience"
              className="form-input"
              placeholder="Enter your experience (in years)"
              value={formDetails.experience}
              onChange={inputChange}
            />
            <input
              type="number"
              name="fees"
              className="form-input"
              placeholder="Enter your fees  (in ruppes)"
              value={formDetails.fees}
              onChange={inputChange}
            />
            <button type="submit" className="btn form-btn" onClick={btnClick}>
              apply
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyKirtankar;
