import { Provider } from 'jotai';
import Router from './router';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <Provider>
        <TitleBar />
        <Router />
        <Toaster />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
