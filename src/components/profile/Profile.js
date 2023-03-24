import React from "react";
import anonymous from "../../assets/icon/anonymous.png";
//import PropTypes from "prop-types";

const Profile = props => {
    return (
        <div style={{borderStyle:"solid", padding:30,marginTop:25, marginRight:250, marginLeft: 250, display:"flex", flexDirection:"column", gap: 15, alignItems:"center"}}>
            {/*<img src={props.profilePic} style={{height:250, width:175}}/> */}
            <img src={props.children} style={{height:250, width:175}}/>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <p>{props.bio}</p>
            <button onClick={props.alertName}>What's my name</button>
        </div>
    )
}

Profile.defaultProps = {
    children: anonymous,
    name: "anonymous",
    profession: "N/A",
    bio: "Lorem ipsum text",
}

/* I imported the prop-type dependency but can't find the PropType function/class
Profile.propTypes = {
    name: PropTypes.number,
    profession: PropTypes.string,
    bio: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
}
*/

export default Profile;