import { FilterButton } from './FilterButton';
import { useTaskContext } from '../../context/TaskContext';
import { FILTERS, TIME_FILTERS, SORT_ORDERS } from '../../constants/filters';

export const FilterBar = () => {
  const { filter, setFilter, timeFilter, setTimeFilter, sortOrder, setSortOrder } =
    useTaskContext();

  return (
    <div className='flex flex-wrap gap-4 mb-6'>
      {/* Status Filters */}
      <div className='flex gap-2'>
        <FilterButton active={filter === FILTERS.ALL} onClick={() => setFilter(FILTERS.ALL)}>
          All
        </FilterButton>
        <FilterButton active={filter === FILTERS.ACTIVE} onClick={() => setFilter(FILTERS.ACTIVE)}>
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
  );
};

export default FilterBar;
