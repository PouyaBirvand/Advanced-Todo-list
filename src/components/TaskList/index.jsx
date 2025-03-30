import { TaskItem } from './TaskItem';
import { useTaskContext } from '../../context/TaskContext';

export const TaskList = () => {
  const { filteredAndSortedTasks } = useTaskContext();

  return (
    <div className='space-y-3 sm:space-y-4'>
      {filteredAndSortedTasks.length === 0 ? (
        <div className='text-center py-8 sm:py-10 text-gray-500'>
          <svg
            className='w-12 h-12 mx-auto mb-3 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            />
          </svg>
          <p className='text-lg sm:text-xl'>No tasks found</p>
          <p className='text-xs sm:text-sm mt-2'>Start by adding a new task above</p>
        </div>
      ) : (
        filteredAndSortedTasks.map((task, index) => (
          <TaskItem key={task.createdAt} task={task} index={index} />
        ))
      )}
    </div>
  );
};

export default TaskList;
