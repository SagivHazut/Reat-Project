import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";

const CardsPanelPage = () => {
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  return;
};

export default CardsPanelPage;
