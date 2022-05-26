import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function IndexReminder ({ user, msgAlert }) {
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/reminder`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then((res) => {
      setReminders(res.data.reminder)
    })
  }, [])
  let reminderJSX
  if (reminders) {
    reminderJSX = reminders.map((reminder) => {
      return (
        <div key={reminder._id}>
          <Card style={{ width: '40rem' }}>
            <Link to={`/reminders/${reminder._id}`}>
              <Card.Title>{reminder.title}</Card.Title>
            </Link>
            <Card.Body>
              <Card.Text>Date: {reminder.time.substring(0, 10)}</Card.Text>
              <Card.Text>Description: {reminder.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center', fontSize: '80px' }}>
        Things I wont forget!
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '50px'
          }}>
          {reminderJSX}
        </ul>
      </div>
    </>
  )
}

export default IndexReminder
