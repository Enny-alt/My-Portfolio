import React, { useState, useRef, useEffect } from "react";
import EALogo from "./EALogo";
import { RiCloseLargeLine, RiMenu3Fill } from "@remixicon/react";
import ContactModal from "./ContactModal";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

    useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <>
      <div className=" hidden sm:flex items-center justify-between px-16 py-6">
        <EALogo />
        <div className="bg-white/10 backdrop-blur-lg rounded-full ml-6 px-6 py-2 border border-white/20">
          <ul className="flex items-center gap-12">
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to={'/links'}>
              <li>More</li>
            </Link>
          </ul>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-white cursor-pointer text-black/80 font-medium px-6 py-2 rounded-full">
          Contact
        </button>
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
      <div className="sm:hidden relative">
        <div className="py-3 px-4 flex items-center justify-between">
          <EALogo />
          <button onClick={() => setShowMenu(prev => !prev)}>
            <RiMenu3Fill />
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 backdrop-blur-lg border-l border-white/30 z-40 transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div ref={menuRef} className="p-6">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="absolute right-4 top-4"
            >
              <RiCloseLargeLine />
            </button>
            <ul className="space-y-4">
              <li>
                <Link to={'/'} onClick={() => setShowMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={() => setShowMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setShowMenu(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/links" onClick={() => setShowMenu(false)}>
                  More
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-white mx-3 text-black/80 font-medium px-4 py-1 rounded-lg">
            Contact
          </button>
          
        </div>
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
};

export default NavBar;
