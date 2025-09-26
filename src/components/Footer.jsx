import React from "react";

function Footer() {
  return (
    <footer className="bg-green-700 w-screen shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center h-20 text-white">
          
          <p className="text-sm">&copy; {new Date().getFullYear()} Carbon Dashboard. All rights reserved.</p>
          
         
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="https://www.linkedin.com/in/akhilraju7/" className="">About Creator</a>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
