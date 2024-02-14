import React from "react";

function Preloader(){
    return(
        <div>
    <div id="preloader">
    <div id="loading-center">
      <div class="loader">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
  </div>
    <div class="element element--1"></div>
    <div class="element element--2"></div>
    <button type="submit" class="scroll__top scroll-to-target" data-target="html">
      <i class="fas fa-angle-up"></i>
    </button>
    <div id="header-fixed-height"></div>
    </div>
    );
}
export default Preloader;