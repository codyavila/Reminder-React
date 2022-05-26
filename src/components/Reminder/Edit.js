import React, { useState, useEffect } from 'react'
// import { indexMemes } from '../../api/meme'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect, withRouter } from 'react-router-dom'
// import './App.css'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const ReviewEdit = ({ user, match, msgAlert }) => {
  const [reminder, setReminder] = useState({
    title: '',
    description: '',
    time: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/reminder/${match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
      // pass in, fire request, send me the arrays, filter this list for users =
      // filter => resource === user id
      // new array meet conditions
      // pass that array to map
    }).then((res) => {
      setReminder(res.data.reminder)
    })
  }, [])

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
      url: `${apiUrl}/reminder/${match.params.id}`,
      method: 'PATCH',
      data: { reminder },
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(() => setUpdated(true))
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
  }

  if (!reminder) {
    return <p>Loading...</p>
  }

  if (updated) {
    return <Redirect to={`/reminder/${match.params.id}`} />
  }

  return (
    <div>
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
            value={reminder.time.substring(0, 10)}
            type='date'
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default withRouter(ReviewEdit)
