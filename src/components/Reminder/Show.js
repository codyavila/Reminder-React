import React, { useState, useEffect } from 'react'
import { Modal, Button, Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Rating from './Rating'
import apiUrl from '../../apiConfig'

import { Redirect, Link, withRouter } from 'react-router-dom'

function ShowReminder ({ user, match, msgAlert }) {
  const [reminder, setReminder] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [show, setShow] = useState(false)
  // const [editToggle, setEditToggle] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    axios({
      url: `${apiUrl}/reminder/${match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then((res) => {
      setReminder(res.data.reminder)
    })
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/reminder/${match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => {
        msgAlert({
          heading: 'Deleted',
          message: 'You will forget now',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Nope!',
          message: 'Delete error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  if (!reminder) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return (
      <Redirect
        to={{
          pathname: '/all-reminders',
          state: { msg: 'You successfully deleted your reminder' }
        }}
      />
    )
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row>
          <Col>
            <Card className='my-3 p-3 rounded'>
              <Card.Body>
                <Link to={`/reminder/${reminder._id}`}>
                  <Card.Title as='div'>
                    <h1>{reminder.title}</h1>
                  </Card.Title>
                </Link>
                <Card.Text as='p'>
                  Due At: {reminder.time.substring(0, 10)}
                </Card.Text>
                <Card.Text as='h6'>{reminder.description}</Card.Text>
                <Card.Text as='h3'>Difficulty:</Card.Text>
                <Rating value={reminder.rating} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='primary' onClick={handleShow}>
          Delete Reminder
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={destroy}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <Link to={'/reminder/' + match.params.id + '/edit'}>
          <Button className='btn btn-primary' style={{ marginLeft: '5px' }}>
            Edit Reminder
          </Button>
        </Link>
      </div>
    </>
  )
}

export default withRouter(ShowReminder)
