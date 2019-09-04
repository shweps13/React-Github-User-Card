import React from "react";


function Usercard(props) {
console.log(props)
const tableWay = `http://ghchart.rshah.org/${props.cards.login}`

  return (
    <div className="Usercard">
        <div className="Upblock">
            <img src={props.cards.avatar_url} alt={props.cards.name} />
            <div className="Uptext">
                <h2>{props.cards.name}</h2>
                <p>{props.cards.login}</p>
                <a href={props.cards.html_url}>{props.cards.html_url}</a>
                <p>Location: {props.cards.location}</p>
                <p>Followers: {props.cards.followers}</p>
                <p>Following: {props.cards.following}</p>
                <p>Bio: {props.cards.bio}</p>
            </div>
        </div>
        <img className="Gittable" src={tableWay} />
    </div>
  );
}

export default Usercard;
