import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { loginAction } from './Redux/Actions/loginAction'
function App() {
  const dispatch = useDispatch()
  let email = "abhinavPrajaptati50@gamaiol.com"
  let password = "admin@123"

  const dataFunc =  async () => {
    const data = await dispatch(loginAction({email: email, password: password}))
    console.log(data);
  }

  useEffect(() => {
    dataFunc()
  }, [])


  return (
    <div>
      <p>Theb APi Fatch</p>

    </div>
  )
}

export default App
































