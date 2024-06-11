import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="App font-sans">
          <Router />
        </div>
        <ToastContainer />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
