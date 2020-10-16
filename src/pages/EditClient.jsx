import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { StartContent } from '../Styles/Start'

import api from '../services/services'

import { Formik, Form, Field } from 'formik'

export default function EditClient() {
  const history = useHistory()
  const idClient = window.localStorage.getItem('id')
  const [client, setClient] = useState(undefined)

  const handleGetClient = async (id) => {
    try {
      const response = await api.get(`/client/${id}`)
      setClient(response.data)
    } catch (e) {}
  }

  const handleUpdateClient = async (values) => {
    try {
      console.log('values', values)
      const response = await api.patch(`/client/${idClient}`, {
        fullName: values.fullName,
        email: values.email,
        friends: values.friends,
      })
      history.push('/confirmation')
    } catch (e) {}
  }

  useEffect(() => {
    handleGetClient(idClient)
  }, [idClient])

  if (!client) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    )
  }

  return (
    <StartContent>
      <div className='start-title'>
        <h2>Edit Page !</h2>
        <Formik
          initialValues={{
            fullName: client.fullName,
            email: client.email,
            friends: {
              fullName: '',
              email: '',
            },
          }}
          onSubmit={handleUpdateClient}
        >
          <Form>
            <div className='start-form-content'>
              <h4 className='start-title-form'>Seu cadastro</h4>
              <div className='start-inputs'>
                <Field name='fullName' placeholder={client.fullName} className='start-input' />
                <Field name='email' placeholder={client.email} className='start-input' />
              </div>
              <h4 className='start-title-form'>Cadastro dos amigos</h4>
              {client.friends.map((element, i) => {
                return (
                  <div className='start-inputs' key={i}>
                    <Field name='friends.fullName' placeholder={element.fullName} className='start-input' />
                    <Field name='friends.email' placeholder={element.email} className='start-input' />
                  </div>
                )
              })}

              <button type='submit' className='start-input-buttom'>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </StartContent>
  )
}
