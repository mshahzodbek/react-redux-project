import {Input} from '../ui'
import image from '../images/image.png'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className="text-center">
        <main class="form-signin w-25 m-auto">
        <form >
            <img class="mb-4" src={image} alt="" width="60" height="57"/>
            <h1 class="h3 mb-3 fw-normal">Please Register</h1>

            <Input label={'Email address'} state={email} setState={setEmail}/>
            <Input label={'Password'} type='password' state={password} setState={setPassword}/>

            <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
        </form>
        </main>
    </div>
  )
}

export default Login