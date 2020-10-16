import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/services'

import { ConfirmationPage, Content, ContentConfirmation, ContentFriends, ContentMe } from '../Styles/Confirmation'

export default function Confirmation() {
  const history = useHistory()
  const [client, setClient] = useState(undefined)
  const idClient = localStorage.getItem('id')

  const handleGetClient = async (id) => {
    try {
      const response = await api.get(`/client/${id}`)
      setClient(response.data)
    } catch (e) {}
  }

  const handleDeleteClient = async (id) => {
    try {
      const response = await api.delete(`/client/${id}`)
      history.push('/start')
    } catch (e) {}
  }

  const handleConfirmation = async (id) => {
    try {
      const response = await api.post(`/client/make/${id}`)
      history.push('/start')
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
    <ConfirmationPage>
      <ContentConfirmation>
        <Content>
          <div className='title-confirmation'>
            <p>Confirme os dados</p>
          </div>
          <div className='content-adjust'>
            <ContentMe>
              <div>
                <h2>Seus dados</h2>
              </div>
              <div className='content-your-confirmation'>
                <h2>{client.fullName}</h2>
                <h3>{client.email}</h3>
              </div>
            </ContentMe>
            <ContentFriends>
              <div>
                <h2>Dados dos seus amigos</h2>
              </div>
              {client.friends.map((element, i) => {
                return (
                  <>
                    <div className='content-friend-confirmation' key={i}>
                      <h2>{element.fullName}</h2>
                      <h3>{element.email}</h3>
                    </div>
                    <div className='content-friend-confirmation' key={i}>
                      <h2>{element.fullName1}</h2>
                      <h3>{element.email1}</h3>
                    </div>
                    <div className='content-friend-confirmation' key={i}>
                      <h2>{element.fullName2}</h2>
                      <h3>{element.email2}</h3>
                    </div>
                  </>
                )
              })}
            </ContentFriends>
          </div>
          <div className='update-button'>
            <Link to='/edit' className='button-edit'>
              Editar
            </Link>
            <button
              onClick={() => {
                handleDeleteClient(idClient)
              }}
              className='button-delete'
            >
              Excluir
            </button>
          </div>
          <h2 className='confirmation-data'>Antes de realizar o sorteio confira os dados</h2>
          <button
            className='button-confirmation'
            onClick={() => {
              handleConfirmation(idClient)
            }}
          >
            Realizar sorteio
          </button>
        </Content>
      </ContentConfirmation>
    </ConfirmationPage>
  )
}
