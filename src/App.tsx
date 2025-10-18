import './App.css';
import { Camera } from 'lucide-react'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mt-4 flex items-center gap-2">
        <Camera className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
