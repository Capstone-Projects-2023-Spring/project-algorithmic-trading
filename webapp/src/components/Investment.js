import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";
import { API_ENDPOINT } from "../services/api-endpoints";

import "./style/investment.css";

const form = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const children = {
  hidden: { y: 5 },
  visible: {
    y: 0,

    transition: {
      type: "spring",
      stiffness: 450,
    },
  },
};

const Investment = ({ loggedIn }) => {
  //console.log(localStorage.getItem('username'));
  const [investment, setInvestment] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    } else {
      setAndFetchInvestment();
    }
  });

  const setAndFetchInvestment = (value) => {
    fetch(`${API_ENDPOINT}/tradester/save_investment/?amount=${value}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let investmentString = data.amount;
        let investment = parseFloat(investmentString);
        if (!isNaN(investment)) {
          setInvestment(data.amount);
        }
      });
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let value = parseFloat(event.target.value);
      if (!isNaN(value) && event.target.checkValidity()) {
        setAndFetchInvestment(value);
      }
    }
  };

  return (
    <motion.div
      variants={form}
      initial="hidden"
      animate="visible"
      className="investment"
    >
      <motion.h1 variants={children}>Investment</motion.h1>

      <div variants={children} className="description">
        <motion.p variants={children}>
          Expected input is a whole number or a decimal number with one or two
          digits after the decimal point.
        </motion.p>
      </div>

      <motion.p variants={children}>
        Your current investment value is: ${investment}
      </motion.p>

      <motion.div variants={children} className="investment-input">
        <label>Enter investment value: </label>
        <input
          inputMode="decimal"
          pattern="^\d+(\.\d{1,2})?$"
          placeholder="0.00"
          onKeyDown={onKeyDown}
        />
      </motion.div>

      <Outlet />
    </motion.div>
  );
};

export default Investment;
