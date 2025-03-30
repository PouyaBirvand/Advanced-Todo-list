import { FilterButton } from './FilterButton';
import { useTaskContext } from '../../context/TaskContext';
import { FILTERS, TIME_FILTERS, SORT_ORDERS } from '../../constants/filters';
import { useState } from 'react';

export const FilterBar = () => {
  const { filter, setFilter, timeFilter, setTimeFilter, sortOrder, setSortOrder } =
    useTaskContext();

  const [activeTab, setActiveTab] = useState('status');

  return (
    <div className='mb-6'>
      {/* Mobile Tabs */}
      <div className='sm:hidden flex border-b border-gray-700 mb-4'>
        <button
          onClick={() => setActiveTab('status')}
          className={`flex-1 py-2 text-center ${activeTab === 'status' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400'}`}
        >
          Status
        </button>
        <button
          onClick={() => setActiveTab('time')}
          className={`flex-1 py-2 text-center ${activeTab === 'time' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400'}`}
        >
          Time
        </button>
        <button
          onClick={() => setActiveTab('sort')}
          className={`flex-1 py-2 text-center ${activeTab === 'sort' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400'}`}
        >
          Sort
        </button>
      </div>

      {/* Desktop View - All filters visible */}
      <div className='hidden sm:flex sm:flex-wrap sm:gap-4'>
        {/* Status Filters */}
        <div className='flex gap-2'>
          <FilterButton active={filter === FILTERS.ALL} onClick={() => setFilter(FILTERS.ALL)}>
            All
          </FilterButton>
          <FilterButton
            active={filter === FILTERS.ACTIVE}
            onClick={() => setFilter(FILTERS.ACTIVE)}
          >
            Active
          </FilterButton>
          <FilterButton
            active={filter === FILTERS.COMPLETED}
            onClick={() => setFilter(FILTERS.COMPLETED)}
          >
            Completed
          </FilterButton>
        </div>
        {/* Time Filters */}
        <div className='flex gap-2'>
          <FilterButton
            active={timeFilter === TIME_FILTERS.ALL}
            onClick={() => setTimeFilter(TIME_FILTERS.ALL)}
          >
            All Time
          </FilterButton>
          <FilterButton
            active={timeFilter === TIME_FILTERS.TODAY}
            onClick={() => setTimeFilter(TIME_FILTERS.TODAY)}
          >
            Today
          </FilterButton>
          <FilterButton
            active={timeFilter === TIME_FILTERS.WEEK}
            onClick={() => setTimeFilter(TIME_FILTERS.WEEK)}
          >
            This Week
          </FilterButton>
          <FilterButton
            active={timeFilter === TIME_FILTERS.MONTH}
            onClick={() => setTimeFilter(TIME_FILTERS.MONTH)}
          >
            This Month
          </FilterButton>
        </div>
        {/* Sort Orders */}
        <div className='flex gap-2'>
          <FilterButton
            active={sortOrder === SORT_ORDERS.NEWEST}
            onClick={() => setSortOrder(SORT_ORDERS.NEWEST)}
          >
            Newest
          </FilterButton>
          <FilterButton
            active={sortOrder === SORT_ORDERS.OLDEST}
            onClick={() => setSortOrder(SORT_ORDERS.OLDEST)}
          >
            Oldest
          </FilterButton>
          <FilterButton
            active={sortOrder === SORT_ORDERS.PRIORITY}
            onClick={() => setSortOrder(SORT_ORDERS.PRIORITY)}
          >
            By Priority
          </FilterButton>
        </div>
      </div>

      {/* Mobile View - Only active tab visible */}
      <div className='sm:hidden overflow-x-auto'>
        {activeTab === 'status' && (
          <div className='flex gap-2'>
            <FilterButton active={filter === FILTERS.ALL} onClick={() => setFilter(FILTERS.ALL)}>
              All
            </FilterButton>
            <FilterButton
              active={filter === FILTERS.ACTIVE}
              onClick={() => setFilter(FILTERS.ACTIVE)}
            >
              Active
            </FilterButton>
            <FilterButton
              active={filter === FILTERS.COMPLETED}
              onClick={() => setFilter(FILTERS.COMPLETED)}
            >
              Completed
            </FilterButton>
          </div>
        )}

        {activeTab === 'time' && (
          <div className='flex gap-2'>
            <FilterButton
              active={timeFilter === TIME_FILTERS.ALL}
              onClick={() => setTimeFilter(TIME_FILTERS.ALL)}
            >
              All Time
            </FilterButton>
            <FilterButton
              active={timeFilter === TIME_FILTERS.TODAY}
              onClick={() => setTimeFilter(TIME_FILTERS.TODAY)}
            >
              Today
            </FilterButton>
            <FilterButton
              active={timeFilter === TIME_FILTERS.WEEK}
              onClick={() => setTimeFilter(TIME_FILTERS.WEEK)}
            >
              This Week
            </FilterButton>
            <FilterButton
              active={timeFilter === TIME_FILTERS.MONTH}
              onClick={() => setTimeFilter(TIME_FILTERS.MONTH)}
            >
              This Month
            </FilterButton>
          </div>
        )}

        {activeTab === 'sort' && (
          <div className='flex gap-2'>
            <FilterButton
              active={sortOrder === SORT_ORDERS.NEWEST}
              onClick={() => setSortOrder(SORT_ORDERS.NEWEST)}
            >
              Newest
            </FilterButton>
            <FilterButton
              active={sortOrder === SORT_ORDERS.OLDEST}
              onClick={() => setSortOrder(SORT_ORDERS.OLDEST)}
            >
              Oldest
            </FilterButton>
            <FilterButton
              active={sortOrder === SORT_ORDERS.PRIORITY}
              onClick={() => setSortOrder(SORT_ORDERS.PRIORITY)}
            >
              By Priority
            </FilterButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
