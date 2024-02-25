import React, { useEffect, useState } from "react";
import KirtankarCard from "../components/KirtankarCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/kirtankars.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Kirtankars = () => {
  const [kirtankars, setKirtankars] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/kirtankar/getallkirtankar`);
    setKirtankars(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container kirtankars">
          <h2 className="page-heading">All Registered Kirtankars</h2>
          {kirtankars.length > 0 ? (
            <div className="kirtankars-card-container">
              {kirtankars.map((ele) => {
                return (
                  <KirtankarCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Kirtankars;