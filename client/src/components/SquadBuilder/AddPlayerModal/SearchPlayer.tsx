import React, { useState } from 'react';
// TODO: figure out what type to place. Kept getting an error so just put any for now. Probably should be array[playerpropobjs] or smth.
interface searchProps {
  setSearchResults: React.Dispatch<React.SetStateAction<any>>;
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
export default function SearchPlayer(props: searchProps) {
  const cleanQueryString = () => {
    return props.keywords.replace(' ', '+').trim();
  };

  const getSearchResults = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4007/players/search?name=${cleanQueryString()}`
      );
      const jsonData = await response.json();
      props.setSearchResults(jsonData);
      if (jsonData.length === 0) {
        props.setSearchResults(['no results']);
      }
    } catch (error) {
      console.log(getErrorMessage(error));
    }
  };

  return (
    <form
      onSubmit={getSearchResults}
      className="input-group relative flex items-stretch w-full mb-4"
    >
      <input
        type="search"
        className="form-control relative flex-auto md:w-[500px] w-full block px-3 py-1.5 text-base
          font-normal text-gray-700 bg-white bg-clip-padding border border-solid
          border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
          focus:bg-white focus:border-green-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={(e) => props.setKeywords(e.target.value)}
      />
      <button
        className="btn px-6 py-2.5 bg-green-500 text-white font-medium text-xs
          leading-tight uppercase rounded shadow-md hover:bg-green-700
          hover:shadow-lg focus:bg-green-700  focus:shadow-lg focus:outline-none
          focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
        type="submit"
        id="button-addon2"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          className="w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>
    </form>
  );
}
