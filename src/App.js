import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BTCCheck from "./components/Addresschecker/Checker";
import Header from "./components/Header";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        
        
        
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
          <Route path="/checkaddress" component={BTCCheck} exact />
        
     
        
      </div>
    </BrowserRouter>
  );
}

export default App;
