import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import React from "react";

import getMenuItems from "./header-menu-init-values";

const CustomMenu = ({ menuConfig }) => {
  const renderMenuItems = (menu = []) => {
    return menu.map((menuItem) => {
      const { title, submenu = [] } = menuItem;
      if (!submenu.length) {
        return <MenuItem>{title}</MenuItem>;
      }
      return <SubMenu label={title}>{renderMenuItems(submenu)}</SubMenu>;
    });
  };
  return <Menu menuButton={<MenuButton>{menuConfig.title}</MenuButton>}>{renderMenuItems(menuConfig.submenu)}</Menu>;
};

function HeaderMenu() {
  const menuItems = getMenuItems();
  return (
    <div className="d-flex">
      {Object.keys(menuItems).map((itemConfigKey) => {
        const itemConfig = menuItems[itemConfigKey];
        return <CustomMenu menuConfig={itemConfig} />;
      })}
    </div>
  );
}
export default HeaderMenu;

{/* <NavLink to={item.path} key={index}>
                <li className="" activeClassName="sidebar-menu active">
                  <a href="" className="menu-item-single">
                    <div className="icon">{item.icon}</div>
                    <span style={{ display: isOpen ? "none" : "block" }} className="sidebar-navtext">
                      {item.name}
                    </span>
                  </a>
                </li>
              </NavLink> */}
