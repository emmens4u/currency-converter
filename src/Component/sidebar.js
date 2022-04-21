import React from "react";
import "./sidebar.css"
function sidebar() {
  return (
    <><div className="wrapper">
          <div className="sidebar">
              <div className="profile">
                  <img src="image\360_F_465677338_kgtxETt836nSjNl3CvQTpNd0To65RtrK.jpg" alt="profile_picture">
                      <h4>Profile</h4>
                  </img></div>
              <ul>
                  <li>
                      <a href="#" className="active">
                          <span className="icon"><i class="fas fa-history"></i></span>
                          <span className="item">History</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i class="fas fa-sign-out-alt"></i></span>
                          <span className="item" onclick="logout()">logout</span>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="section">
              <div className="top_navbar">
                  <div className="hamburger">
                      <a href="#">
                          <i className="fas fa-bars"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div><script>
              var hamburger = document.querySelector(".hamburger");
              hamburger.addEventListener("click", function(){document.querySelector("body").classList.toggle("active")};
              {"}"})

              function logout() {localStorage.removeItem("jwt")};
              window.location.href = './index1.html'
              {"}"}
          </script></>
  )
}

export default sidebar;
