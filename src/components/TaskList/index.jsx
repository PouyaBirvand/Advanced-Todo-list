import { TaskItem } from './TaskItem';
import { useTaskContext } from '../../context/TaskContext';

export const TaskList = () => {
  const { filteredAndSortedTasks } = useTaskContext();

  return (
    <div className='space-y-4'>
      {filteredAndSortedTasks.length === 0 ? (
        <div className='text-center py-10 text-gray-500'>
          <p className='text-xl'>No tasks found</p>
          <p className='text-sm mt-2'>Start by adding a new task above</p>
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
