import './App.css';
import TaskListComponents from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de listado de Estado de Contacto */}
       <TaskListComponents></TaskListComponents>
      </header>
    </div>
  );
}

export default App;
