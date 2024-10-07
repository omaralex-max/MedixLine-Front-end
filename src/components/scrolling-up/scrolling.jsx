import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./scrolling.css"


export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Link
      to="#"
      onClick={scrollToTop}
      id="back-to-top"
      className="back-to-top fs-5 rounded-pill text-center bg-primary justify-content-center align-items-center"
      style={visible === true ? { display: "block" } : { display: "none" }}
    >
      <svg
        className="fea icon-sm scroll"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="fea icon-sm"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </Link>
  );
}
