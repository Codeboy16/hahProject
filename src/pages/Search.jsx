import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from "../components/footer";
import axios from 'axios';

const Search = () => {
    // State to store search input, fetched data, and filtered results
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchFound, setSearchFound] = useState([]);

    // Function to show no data when no search results are found
    function noData(data = 0) {
        return (
            <span className="flex flex-col justify-center items-center text-center space-y-4">
                <i className="ri-megaphone-line text-6xl text-blue-500 transform transition-all duration-300 hover:scale-110"></i>
                <p className="text-gray-700 text-3xl font-semibold">
                    {data ? "No Search Result Found Try Again.." : "Nothing to show here. Please search!"}
                </p>
            </span>
        );
    }

    // Fetching data from API and filtering based on the search input
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setSearchData(res.data);
        };
        getData();
    }, []); // Empty dependency array, runs only once when the component mounts

    // Filter data based on the search input
    useEffect(() => {
        if (search === '') {
            setSearchFound([]); // Clear results if search input is empty
        } else {
            const fdata = searchData.filter((data) =>
                data.title.toLowerCase().includes(search.toLowerCase()) // Filter by title
            );
            setSearchFound(fdata); // Update the state with the filtered results
        }
    }, [search, searchData]); // Runs whenever 'search' or 'searchData' changes

    return (
        <>
            <Header />
            <div className='container h-screen overflow-scroll'>
                {/* Header with logo and title */}
                <div className="container my-4 flex flex-col justify-center items-center rounded-lg p-6 mx-auto">
                    <span className="flex justify-center items-center space-x-2">
                        <img src="/images/cLogo.png" alt="Logo" className="h-16" />
                        <h2 className="text-3xl font-semibold kanit-medium">Hire And Hired</h2>
                    </span>

                    {/* Search bar */}
                    <span className=''>
                        <input
                            type="search"
                            className="bg-white text-2xl w-60 md:w-[40rem] h-16 mt-4 p-4 rounded-full shadow-2xl ring-3 ring-green-500 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)} // Set the search state as user types
                            value={search} // Bind the search state to the input field
                        />
                    </span>
                </div>

                {/* Show the search results or a message if no data is found */}
                <div className="min-h-40 p-2 flex flex-col justify-center items-center overflow-scroll ">
                    {searchFound.length > 0 ? (
                        searchFound.map(item => (
                            <div key={item.id}>
                                <p className='border m-1 p-2 px-3 text-center rounded-md bg-gray-50 min-w-48 md:min-w-96 shadow-md'>{item.title}</p>
                            </div>
                        ))
                    ) : (
                        noData(searchFound.length)
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Search;
