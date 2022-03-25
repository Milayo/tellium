import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useState, useEffect } from "react";

function stringToColor() {
   
   

}

function stringAvatar(name) {
  return {
   
    children: `${name.split(" ")[0][0]}`,
  };
}

export default function BackgroundLetterAvatars({ Uname }) {
    const [color, setColor] = useState('')
    
    useEffect(() => {
        let generatedColor
         const randomColor = Math.floor(Math.random() * 16777215).toString(16);
         generatedColor = "#" + randomColor;
          setColor(generatedColor)
    }, [])
    
 console.log( color );
  return (
    <Avatar
      {...stringAvatar(Uname)}
      style={{
        background: color,
        height: "30px",
        width: "30px",
        fontSize: "15px"
      }}
    />
  );
}
