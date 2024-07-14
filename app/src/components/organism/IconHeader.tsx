import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function IconHeader() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <header className="fixed top-0 w-full z-50">
        <nav className="bg-white border-gray-200 px-4 shadow-lg lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="SNS TECH Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                SNS TECH
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}