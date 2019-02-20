import React from "react";

class Button extends React.Component{

    render(){
        return(
            <a  href="https://oauth.vk.com/authorize?client_id=6856984&display=popup&redirect_uri=http://localhost:3000/&scope=photos,offline&response_type=token&v=5.92">
                <button style={{margin: "0 auto", color: "#ffffff",background:"#419BE0", border:"none", borderRadius:"2px",padding: "10px 20px"}}>Войти</button>
            </a>
        )
    }
}
export default Button;