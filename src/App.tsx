import './App.css';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
      {num}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => setNum((pre) => pre++)}>add</button>
    </div>
  );
}

export default App;
