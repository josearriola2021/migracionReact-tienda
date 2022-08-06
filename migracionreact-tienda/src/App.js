import Router from "./router";
import { AuthProvider } from "./context";

function App() {

  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
