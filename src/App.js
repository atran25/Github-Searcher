import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layouts/assets/Alert";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <main className="container mx-auto p-8">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/user/:login" element={<User/>}/>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App;
