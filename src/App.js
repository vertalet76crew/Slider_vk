import React from 'react';
import SimpleSlider from "./components/SimpleSlider";
import "./index.css"
import Button from "./components/Button"
class App extends React.Component {

  state = {
    token: localStorage.getItem("token")
  }

  render() {
   let tokenObj = window.location.hash
      .split(/[#, &]/ig)
      .filter(item => Boolean(item))
      .map(item => item.split('='))
      .reduce((res, item) => {
        res[item[0]] = item[1];
        return res;
      }, {})

    let {access_token} = tokenObj;
   
     localStorage.setItem("token", access_token)
    //  localStorage.removeItem("token")
    if (this.state.token) {
      return <SimpleSlider  accessToken={access_token} />
    }
    return <Button />
  
  }

}
export default App;