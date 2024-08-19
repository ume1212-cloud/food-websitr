// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="company-name">My Company</div>
//       <input type="text" className="search-bar" placeholder="Search..." />
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="company-name">My Company</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div style={{backgroundColor:'red'}}>
      <nav className="navbar-2"style={{marginLeft:'30px',marginRight:'30px',borderRadius:'10px'}}>
        <ul className="nav-links-2">
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav></div>
    </>
  );
};

export default Navbar;