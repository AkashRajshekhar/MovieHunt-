import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

        <h1 className="text-lg font-semibold text-white">
          🎬 MovieHunt
        </h1>

        <p className="text-sm mt-2 md:mt-0">
          Made with ❤️ by <span className="text-red-500 font-medium">Akash</span>
        </p>

      </div>

    </footer>
  );
};

export default Footer;