// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Menu from "./nav-init-values";

// const Sidebar = () => {

//   return (
//     <>
//       <ul className="sidebar-menu">
//         {Menu.map((item, index) => {
//           if (item.submenu) {
//             return (
//               <li className="submenu-container">
//                 <SubMenu key={item.name} />
//               </li>
//             );
//           }
//           return (
//             <NavLink to={item.path} key={index}>
//               <li className="" activeClassName="sidebar-menu active">
//                 <a href="" className="menu-item-single">
//                   <div className="icon">{item.icon}</div>
//                   <span className="sidebar-navtext">{item.name}</span>
//                 </a>
//               </li>
//             </NavLink>
//           );
//         })}
//       </ul>
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default Sidebar;
