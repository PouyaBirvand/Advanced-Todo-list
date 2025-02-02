import { useTaskContext } from '../../context/TaskContext';
import { timeAgo } from '../../utils/timeAgo';

export const TaskItem = ({ task, index }) => {
  const {
    editingTask,
    editText,
    setEditText,
    toggleCompleted,
    startEditing,
    handleEdit,
    handlePriorityChange,
    handleDeleteTodo,
  } = useTaskContext();

  return (
    <div className='group relative bg-gray-900/50 rounded-2xl p-6 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'>
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl'></div>

      <div className='relative flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <input
            checked={task.completed}
            onChange={() => toggleCompleted(task.createdAt)}
            type='checkbox'
            className='w-6 h-6 rounded-lg border-2 border-purple-500 text-cyan-500 
                     focus:ring-purple-500 focus:ring-offset-0 focus:ring-offset-transparent 
                     transition-all cursor-pointer'
          />

          {editingTask === task.createdAt ? (
            <input
              type='text'
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleEdit(task.createdAt)}
              onKeyDown={(e) => e.key === 'Enter' && handleEdit(task.createdAt)}
              className='bg-gray-800/50 text-gray-100 rounded px-2 py-1'
              autoFocus
            />
          ) : (
            <span onClick={() => startEditing(task)} className='cursor-pointer'>
              {task.text}
            </span>
          )}
        </div>

        <div className='flex items-center gap-4'>
          <select
            value={task.priority}
            onChange={(e) => handlePriorityChange(task.createdAt, e.target.value)}
            className='bg-gray-800/50 text-gray-100 rounded-lg px-2 py-1'
          >
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>

          <button
            onClick={() => startEditing(task)}
            className='text-gray-500 hover:text-cyan-500 transition-colors p-2'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          </button>

          <button
            onClick={() => handleDeleteTodo(task.createdAt)}
            className='text-gray-500 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-xl'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>

          <div className='text-gray-400 text-sm'>{timeAgo(task.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};
