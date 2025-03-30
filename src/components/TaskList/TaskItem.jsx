import { useTaskContext } from '../../context/TaskContext';
import { timeAgo } from '../../utils/timeAgo';
import { useState } from 'react';

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

  const [showActions, setShowActions] = useState(false);

  // Priority color mapping
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-yellow-500',
    low: 'text-green-500',
  };

  return (
    <div className='group relative bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'>
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl'></div>

      {/* Desktop Layout */}
      <div className='relative hidden sm:flex items-center justify-between'>
        <div className='flex items-center gap-4 flex-1 mr-4'>
          <input
            checked={task.completed}
            onChange={() => toggleCompleted(task.createdAt)}
            type='checkbox'
            className='w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 border-purple-500 text-cyan-500
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
              className='bg-gray-800/50 text-gray-100 rounded px-2 py-1 flex-1'
              autoFocus
            />
          ) : (
            <span
              onClick={() => startEditing(task)}
              className={`cursor-pointer flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
          )}
        </div>
        <div className='flex items-center gap-3 sm:gap-4'>
          <select
            value={task.priority}
            onChange={(e) => handlePriorityChange(task.createdAt, e.target.value)}
            className='bg-gray-800/50 text-gray-100 rounded-lg px-2 py-1 text-sm'
          >
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <button
            onClick={() => startEditing(task)}
            className='text-gray-500 hover:text-cyan-500 transition-colors p-1 sm:p-2'
          >
            <svg
              className='w-4 h-4 sm:w-5 sm:h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
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
            className='text-gray-500 hover:text-red-500 transition-colors p-1 sm:p-2 hover:bg-red-500/10 rounded-xl'
          >
            <svg
              className='w-5 h-5 sm:w-6 sm:h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
          <div className='text-gray-400 text-xs sm:text-sm whitespace-nowrap'>
            {timeAgo(task.createdAt)}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='sm:hidden'>
        <div className='flex items-start mb-2'>
          <input
            checked={task.completed}
            onChange={() => toggleCompleted(task.createdAt)}
            type='checkbox'
            className='w-5 h-5 mt-0.5 rounded-lg border-2 border-purple-500 text-cyan-500
                      focus:ring-purple-500 focus:ring-offset-0 focus:ring-offset-transparent
                      transition-all cursor-pointer flex-shrink-0'
          />
          <div className='ml-3 flex-1'>
            {editingTask === task.createdAt ? (
              <input
                type='text'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleEdit(task.createdAt)}
                onKeyDown={(e) => e.key === 'Enter' && handleEdit(task.createdAt)}
                className='bg-gray-800/50 text-gray-100 rounded px-2 py-1 w-full'
                autoFocus
              />
            ) : (
              <div className='flex justify-between items-start'>
                <span
                  onClick={() => startEditing(task)}
                  className={`cursor-pointer pr-2 ${task.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => setShowActions(!showActions)}
                  className='text-gray-500 p-1 ml-1 flex-shrink-0'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className='flex items-center mt-1 text-xs'>
              <span className={`${priorityColors[task.priority]} mr-2`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              <span className='text-gray-400'>{timeAgo(task.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Mobile Action Menu */}
        {showActions && (
          <div className='mt-2 p-2 bg-gray-800/70 rounded-lg border border-gray-700/50 flex justify-between'>
            <div className='flex-1'>
              <label className='block text-xs text-gray-400 mb-1'>Priority</label>
              <select
                value={task.priority}
                onChange={(e) => {
                  handlePriorityChange(task.createdAt, e.target.value);
                  setShowActions(false);
                }}
                className='w-full bg-gray-700/50 text-gray-100 rounded-lg px-2 py-1 text-sm'
              >
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </div>
            <div className='flex ml-3 items-end'>
              <button
                onClick={() => {
                  startEditing(task);
                  setShowActions(false);
                }}
                className='text-cyan-500 p-2 rounded-lg bg-cyan-900/20'
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
                onClick={() => {
                  handleDeleteTodo(task.createdAt);
                  setShowActions(false);
                }}
                className='text-red-500 p-2 ml-2 rounded-lg bg-red-900/20'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
