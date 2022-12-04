import Image from 'next/legacy/image';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useRouter } from 'next/router';
import { addDays } from 'date-fns';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const resetInput = () => {
    setSearchInput('');
  };
  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <header
      className="sticky top-0 z-50 grid 
        grid-cols-5 sm:grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      <div
        onClick={() => router.push('/')}
        className=" hidden relative sm:flex items-center h-10 cursor-pointer my-auto  w-[100px] sm:w-[100%]"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div
        onClick={() => router.push('/')}
        className=" relative flex sm:hidden col-auto items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="/assets/icon.png"
          alt="Airbnb Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center col-span-3 sm:col-span-1 border-2 rounded-full sm:py-2 md:shadow-sm">
        <input
          value={searchInput}
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow text-ellipsis w-[100%] box-border	focus:ring-0 sm:pl-5 bg-transparent border-none hover:border-none outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon
          className="inline-flex h-8  bg-red-400
         text-white rounded-full mx-2 p-2 cursor-pointer md:mx-2"
        />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline  cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline  h-6 cursor-pointer" />

        <div className="flex space-x-2 border-2 p-2 rounded-xl sm:rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="hidden sm:inline-block h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-5 sm:col-span-3 mx-auto  ">
          <DateRange
            editableDateInputs={true}
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            maxDate={addDays(new Date(), 900)}
            rangeColors={['#FD5B61']}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg border-none focus:ring-0 outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
