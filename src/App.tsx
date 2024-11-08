import Router from './router';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <TitleBar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
