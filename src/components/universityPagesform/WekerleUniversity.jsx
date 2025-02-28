import React from "react";

const WekerleUniversity = () => {
  return (
    <>
      <div>
        <h1>wekerle</h1>
      </div>
      <footer className="bg-gray-50 mt-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 University Application Portal. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WekerleUniversity;
