import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Refund from "./pages/refund";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import SignIn from "./pages/signIn";

import Heatmap from "./pages/heatmap";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashborad/Dashboard";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./Navigation";
import { MantineProvider,createTheme,Button  } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './theme.module.css';

function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const theme = createTheme({
    
    components: {
      Button: Button.extend({
        classNames: classes,
      }),
    },
  });
  
  return (
    <MantineProvider theme={theme}>
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
      </AuthProvider>  
    </div>
    </MantineProvider>
  );
}

export default App;
