import React, { useEffect, useState } from 'react'
import { getTodos } from '../../API'
import './Main.scss'
import Loader from '../../components/loader/Loader';
import {ImFileEmpty} from 'react-icons/im'
import Todo from './Todo';

const Main = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [base , setBase] = useState(null)
  const [monitoring , setMonitoring] = useState('')

  useEffect(() => {
    getTodos(accessToken)
    .then(res => {
      setBase(res)
      setMonitoring('Work!')
    })
  } , [monitoring])

  

  return (
    <div className='container'>
      <h1 className='count'>Todo count: <span>{base ? base.todosCount : 0}</span></h1>
      <div className='row'>
        {
          (base && base?.todos.length !== 0) ? (
            base?.todos.map(item => (
              <Todo key={item.id} item={item} setMonitoring={setMonitoring}/>
            ))
          ) : (base === null) ? (
            <Loader />
          ) : (
            <h1>
              <ImFileEmpty />
            </h1>
          )
        }
      </div>
    </div>
  )
}

export default Main