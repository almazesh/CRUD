import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getCreate } from '../../API';

const Admin = () => {
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [date , setDate] = useState('')
  const accessToken = localStorage.getItem('accessToken')
  const [alert , setAlert] = useState(false)
  const [error , setError] = useState(false)
  const createTodo = () => {

    if(title !== '' && content !== '' && date !== ''){
      getCreate(accessToken , {
        title,
        content,
        date,
      })
      .then(() => {
        setAlert(true)
      })
    }else{
      setError(true)
    }
  }

  return (
    <section>
      <div className='container'>
        {
          alert && (
            <div className={alert ? 'alert active' : 'alert'}>
              Successful adding...
            </div>
          )
        }
        {
          error && (
            <div className={error ? 'errorAlert errorActive' : 'errorAlert'}>
              Fill the area!
            </div>
          )
        }
        <div className='register_card'>
          <h4>Admin</h4>
          <hr />

          <form>
            <div>
              <input type='text' placeholder='Title *' defaultValue={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
              <input type='text' placeholder='Content *' defaultValue={content} onChange={e => setContent(e.target.value)} />
            </div>
            <div>
              <input type='date' placeholder='Date *' defaultValue={date} onChange={e => setDate(e.target.value)} />
            </div>
          </form>
          <div className='register_btn'>
            <button onClick={() => createTodo()} className='btn_primary'>Adding</button>
          </div>

          <div className='link_auth'>
            <Link to='/'>Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin