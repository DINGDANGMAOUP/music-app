import './App.css';

function App() {
  const [num, setNum] = useState(0);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="music-app-theme">
      <div>
        {num}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={() => setNum((pre) => pre++)}>add</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
