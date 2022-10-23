const getMenuItems = () => [
  {
    title: "Home",
    submenu: [],
  },
  {
    title: "Course",
    submenu: [
      {
        title: "Single Course",
      },
      {
        title: "Online Course",
      },
    ],
  },
  {
    title: "Feature",
    submenu: [
      {
        title: "Attendees",
        // submenu: [
        //   {
        //     title: "Count Characters",
        //     submenu: [
        //       {
        //         title: "d",
        //         submenu: [
        //           {
        //             title: "yeah",
        //             submenu: [],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     title: "Explode Date",
        //   },
        //   {
        //     title: "Merge (Previous combine columns)",
        //   },
        //   {
        //     title: "Split (previously split columns)",
        //   },
        //   {
        //     title: "Update Data Type",
        //   },
        // ],
      },
      {
        title: "Public Review",
      },
      {
        title: "Documents",
      },
    ],
  },
  {
    title: "Teachers",
  },
  {
    title: "Blog",
  },
  {
    title: "Contact",
  },
];

export default getMenuItems;
