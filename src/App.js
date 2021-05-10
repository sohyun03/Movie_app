import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

//Route 안에는 두개의 props가 들어가는데 하나는 렌더링할 스크린이 들어가고 다른건 뭘 할지 정해줌
//path 경로로 가고 가면  About 컴포넌트 보여줌
function App() {
  return <HashRouter>
  <Navigation />
  <Route path="/" exact={true} component={Home} />
  <Route path="/about" component={About} />
  </HashRouter>
}

export default App;
