import SongsList from "@/components/SongsList";
import React from "react";

const tabs = [{ name: "Instagram" }, { name: "Tik Tok" }, { name: "Youtube" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TrendingSongs = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-gray-900 mb-8'>
        Trending Playlist of the Day
      </h1>
      <div className='my-5'>
        <div className='sm:hidden'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          <select
            id='tabs'
            name='tabs'
            className='px-1 py-2 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className='hidden sm:block'>
          <nav
            className='cursor-pointer relative z-0 rounded-lg shadow flex divide-x divide-gray-200'
            aria-label='Tabs'
          >
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    tab.current ? "bg-indigo-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
        <div className='col-span-1 md:col-span-2 lg:col-span-3'>
          <SongsList />
        </div>
        <div className='col-span-1 lg:col-span-2'>
          <SongsList />
        </div>
      </div>
    </div>
  );
};

export default TrendingSongs;
