import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import { onAuthStateChanged } from "firebase/auth";
import Invoices from "./scenes/invoices";

import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Auth from "./scenes/auth";
import {auth} from "./config/firebase";
import Geography from "./scenes/geography";
import SignUp from "./scenes/signup";

/*
import Form from "./scenes/form";

import FAQ from "./scenes/faq";

*/
import Calendar from "./scenes/calendar";

import {Routes, Route} from "react-router-dom";
import {useState, useEffect } from "react";

const App = ()  => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          {
            isAuthenticated ? (
              <>
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar}/>
                  <Routes>
                    <Route exact path="/" element={<Dashboard />}/>
                    <Route exact path="/dashboard" element={<Dashboard />}/>
                    <Route exact path="/team" element={<Team />}/>
                    <Route exact path="/contacts" element={<Contacts />}/>
                    <Route exact path="/invoices" element={<Invoices />}/>
                    <Route exact path="/bar" element={<Bar />}/>
                    <Route exact path="/pie" element={<Pie />}/>
                    <Route exact path="/line" element={<Line />}/>
                    <Route exact path="/calendar" element={<Calendar />}/>
                    <Route exact path="/geography" element={<Geography />}/>
                  </Routes>
                </main>
              </>
            ) : (
              <>
                <Routes>
                  <Route exact path="/" element={<Auth />}/>
                  <Route exact path="/signup" element={<SignUp />}/>
                </Routes>
              </>
            )
          }
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;