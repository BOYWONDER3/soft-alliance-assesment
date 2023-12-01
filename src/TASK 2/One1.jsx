import { useState, useEffect } from "react";

export function One1() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState();
  
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        setUsers(data)
    })
  })

  return (
    <div>
      <h1>Users</h1>
      {list}
    </div>
  );
}
