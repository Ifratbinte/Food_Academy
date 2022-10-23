import { FaChartBar, FaTachometerAlt } from "react-icons/fa";

const Menu = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    path: "/stock",
    name: "Stock",
    icon: <FaChartBar />,
    submenu: [
      {
        path: "/stock/stock-report",
        name: "Stock Report",
      },
    ],
  },
];

export default Menu;
