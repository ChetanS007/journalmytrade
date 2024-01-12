import "./App.css";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./Navigation";
import { MantineProvider,createTheme,Button  } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './theme.module.css';

function App() {
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
