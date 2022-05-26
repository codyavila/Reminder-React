import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
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
      // pass in, fire request, send me the arrays, filter this list for users =
      // filter => resource === user id
      // new array meet conditions
      // pass that array to map
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
  // const onEdit = () => {
  //   setEditToggle(!editToggle)
  // }
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
  // if (editToggle === false) {
  //   return (
  //     <Redirect to={{ pathname: '/my-memes/' + match.params.id }} />
  //   )
  // }

  return (
    <>
      <h1>{reminder.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <p>Creator: {meme.author}</p>
      <p>Created: {meme.createdAt.substring(0, 10)}</p>
      <p>Updated: {meme.updatedAt.substring(0, 10)}</p> */}
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
