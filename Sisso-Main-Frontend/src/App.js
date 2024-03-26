import React from "react";
import RouteCompo from "./Routes/RouteCompo";
import { Provider } from 'react-redux'
import store from './redux/store'



function App() {

  React.useEffect(()=>{
    // your code here to run on component mount
    localStorage.setItem('baseUrl','https://backend.sissoo.in')
    // localStorage.setItem('baseUrl','http://192.168.1.112:4000')
    console.log('baseUrl',localStorage.getItem('baseUrl'))
  },[])

  return (
    <div>
      
      <Provider store={store}>
        <RouteCompo />
      </Provider>

    </div>
  );
}

export default App;
