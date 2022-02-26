import Avatar from "./Avatar";
import "../css/Friendlist.css";

function Friendlist (props) {
  let data = props.data;

  return (
    <div className="friendlist">
      {
        data.map((item,index) => {
          return (<div key={index} className={`friend-list-item ${item.position}`}>
            <Avatar name={item.user}/>
            <div>{item.displayName}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Friendlist;