import './App.css';
import ListTask from './components/ListTask'
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="All">
    <ListTask/>
    <div className='add'>
    <AddTask/>
      </div>  
    
    </div>
  );
}

export default App;
