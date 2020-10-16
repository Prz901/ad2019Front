import React from 'react'
import { StartContent } from '../Styles/Start'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../services/services'
import { useHistory } from 'react-router-dom'

// import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

export default function Start() {
  const history = useHistory()
  const fetchSecret = async (values) => {
    console.log('values', values)
    try {
      const response = await api.post('/client/create', {
        fullName: values.fullName,
        email: values.email,
        friends: values.friends,
      })
      const id = response.data._id
      window.localStorage.setItem('id', id)
      history.push('/confirmation')
    } catch (e) {}
  }

  // const handleChange = ({ props }) => {
  //   //reestruturar os dados pra mandar pra fetchsecret
  // }

  return (
    <>
      <StartContent>
        <Link to='/'>
          <FiArrowLeft className='back-page' />
        </Link>
        <div className='start-title'>
          <h2>Cadastre você e seus amigos !</h2>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              friends: [
                {
                  fullName: '',
                  email: '',
                },
                { fullName: '', email: '' },
                { fullName: '', email: '' },
              ],
            }}
            onSubmit={fetchSecret}
          >
            <Form>
              <div className='start-form-content'>
                <h4 className='start-title-form'>Seu cadastro</h4>
                <div className='start-inputs'>
                  <Field name='fullName' placeholder='fullname' className='start-input' />
                  <Field name='email' placeholder='email' className='start-input' />
                </div>
                <h4 className='start-title-form'>Cadastro dos amigos</h4>
                <div className='start-inputs'>
                  <Field name='friends[0].fullName' placeholder='fullname' className='start-input' />
                  <Field name='friends[0].email' placeholder='email' className='start-input' />
                </div>
                <div className='start-inputs'>
                  <Field name='friends[1].fullName' placeholder='fullname1' className='start-input' />
                  <Field name='friends[1].email' placeholder='email1' className='start-input' />
                </div>
                <div className='start-inputs'>
                  <Field name='friends[2].fullName' placeholder='fullname2' className='start-input' />
                  <Field name='friends[2].email' placeholder='email2' className='start-input' />
                </div>
                <button type='submit' className='start-input-buttom'>
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </StartContent>
    </>
  )
}
