import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

import apiUrl from '../../apiConfig'

const ReminderCreate = ({ user, msgAlert }) => {
  const [reminder, setReminder] = useState({
    title: '',
    description: '',
    time: ''
  })
  const [createdReminderId, setCreatedReminderId] = useState(null)

  const handleChange = (event) => {
    event.persist()
    setReminder((reminder) => ({
      ...reminder,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/reminder`,
      method: 'POST',
      data: { reminder },
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then((res) => setCreatedReminderId(res.data.reminder.id))
      .then(() =>
        msgAlert({
          heading: 'Reminder Creating',
          message: 'Now you wont forget!',
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Oops',
          message: 'Reminder failed:' + error.message,
          variant: 'danger'
        })
      })

    if (createdReminderId) {
      return <Redirect to={`/reminder/${createdReminderId}`} />
    }
  }
  return (
    <>
      <div className='App'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='name'>
            <Form.Label className='headers'>Name</Form.Label>
            <Form.Control
              required
              name='title'
              value={reminder.title}
              placeholder='What to remember?'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label className='headers'>Description</Form.Label>
            <Form.Control
              required
              name='description'
              value={reminder.description}
              placeholder='Description'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='date'></Form.Label>
            <Form.Control
              required
              name='time'
              value={reminder.time}
              type='date'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ReminderCreate
