import React, { useState, useEffect } from 'react'
import Rating from './Rating'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Card, Col, Row } from 'react-bootstrap'
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
        <Col key={reminder._id} sm={12} md={6} lg={4} xl={3}>
          <Card className='my-3 p-3 rounded'>
            <Card.Body>
              <Link to={`/reminder/${reminder._id}`}>
                <Card.Title as='h1'>
                  <strong>{reminder.title}</strong>
                </Card.Title>
              </Link>
              <Card.Text as='p'>
                Due At: {reminder.time.substring(0, 10)}
              </Card.Text>
              <Card.Text as='h6'>{reminder.description}</Card.Text>
              <Card.Text as='h3'>Difficulty:</Card.Text>
              <Rating value= {reminder.rating} />
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center', fontSize: '80px' }}>
        My Reminder Noodles
      </h3>
      <Row>
        {reminderJSX}
      </Row>
    </>
  )
}

export default IndexReminder
