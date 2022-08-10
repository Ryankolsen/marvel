import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navigation = [
    { name: "Dashboard", href: "/", current: true },
    { name: "Team", href: "/team", current: false },
    { name: "Marvel", href: "marvel", current: false },
    { name: "Calendar", href: "#", current: false },
  ];
  const [nav, setNav] = useState(navigation);
  const [indx, setIndx] = useState(0);

  useEffect(() => {
    const navStatus = [...nav];
    for (let i = 0; i < navStatus.length; i++) {
      navStatus[i].current = false;
    }

    navStatus[indx].current = true;
    console.log(navStatus);
    setNav(navStatus);
  }, [indx]);

  //   function classNames(...classes: string[]) {
  //     console.log({ classes });
  //     return classes.filter(Boolean).join(" ");
  //   }

  function handleClick(name: string) {
    const indexNum = nav.findIndex((element) => {
      return element.name === name;
    });
    console.log(indexNum);
    setIndx(indexNum);
  }

  return (
    <div className="bg-gray-800">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="absolute inset-y-0 left-0 flex items-center lg:space-x-4 sm:space-x-0">
            {navigation.map((navItem) => {
              return (
                <Link
                  key={navItem.name}
                  to={navItem.href}
                  className={
                    navItem.current === true
                      ? "bg-gray-900 text-white"
                      : navItem.current === false
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white px-3"
                      : "py-2 rounded-md text-sm font-medium"
                  }
                  //   className={classNames(
                  //     navItem.current === true
                  //       ? "bg-gray-900 text-white"
                  //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  //     "px-3 py-2 rounded-md text-sm font-medium"
                  //   )}
                  aria-current={navItem.current ? "page" : undefined}
                >
                  <button onClick={(e) => handleClick(navItem.name)}>
                    {navItem.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
