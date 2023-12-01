import { useEffect, useState } from 'react'

export function Two2() {


    const [post, newPost] = useState()

    useEffect(() => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: 'NEW POST',
                name: 'isaac',
                email: 'oozie@gmail.com',
                city: 'city boi',
                phone: '00929383094',
            })
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
      })

function handleSubmit() {
    e.preventDefault();
}

  render(
  <Form onSubmit={handleSubmit}>
    <label htmlFor=''>List</label>
    <input type='text'></input>
        
  </Form>
  );
}
