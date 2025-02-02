import { TaskProvider } from './context/TaskContext';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Stats } from './components/Stats';

function App() {
  return (
    <TaskProvider>
      <div className='min-h-screen bg-[#0F172A] bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-12 px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='relative text-center mb-16'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20 blur-3xl'></div>
            <h1 className='relative text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-gradient-x'>
              TASK<span className='text-cyan-400'>MASTER</span>
            </h1>
            <div className='mt-4 flex justify-center gap-2'>
              <span className='px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700/50'>
                v5.5
              </span>
              <span className='px-3 py-1 bg-cyan-900/30 text-cyan-400 text-sm rounded-full border border-cyan-700/50'>
                Gen Z
              </span>
            </div>
          </div>

          {/* Main Content */}
          <SearchBar />
          <FilterBar />
          <TaskForm />
          <TaskList />
          <Stats />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
