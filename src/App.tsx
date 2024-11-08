import './App.css';

function App() {
  const [num, setNum] = useState(0);
  return (
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <TitleBar />
      <div>
        {num}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button onClick={() => setNum(num + 1)}>add</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
