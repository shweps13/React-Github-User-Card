import React from "react";


function Followercard(props) {
console.log("List of followers in child element", props)

  return (
    <div className="Followercard">
        <div>
            {props.followers.map(follower => (
                
            <div className="Follblock" key={follower.id}>
                <img src={follower.avatar_url} alt={follower.login} />
                <div className="Folltext">
                    <h2>{follower.login}</h2>
                    <p>{follower.login}</p>
                    <a href={follower.html_url}>{follower.html_url}</a>
                </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Followercard;
