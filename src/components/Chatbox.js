import Avatar from "./Avatar";
import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';
import Chatline from "./Chatline";

function Chatbox (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  return (
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
    
           <div className="bg">
            <div className="chatbox-item-text">
            <Avatar name={item.displayName}/>
             <div>{item.displayName}: </div>
              <Chatline text={item.msg}/>
            </div>
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Chatbox;