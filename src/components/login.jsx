import {Input} from '../ui'
import image from '../images/image.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../slice/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)

    const loginHandler = e => {
        e.preventDefault()
        dispatch(loginUserStart())
    }

    console.log(loginHandler)

  return (
    <div className="text-center">
        <main className="form-signin w-25 m-auto">
        <form >
            <img className="mb-4" src={image} alt="" width="60" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <Input label={'Email address'} state={email} setState={setEmail}/>
            <Input label={'Password'} type='password' state={password} setState={setPassword}/>

            <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
                {isLoading ? 'loading...' : "Login"}
            </button>
        </form>
        </main>
    </div>
  )
}

export default Login