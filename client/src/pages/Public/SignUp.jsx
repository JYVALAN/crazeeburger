import Header from "../../components/Header"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import { useState } from "react"

export default function SignUp(){


      // State
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    lastname: '',
    firstname: ''

  })

// Comportement
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(credentials)
    // axios.post('https//localhost:8080/', credentials)
    //   .then(res => console.log(res))
    //   .catch(error => console.error(error))
  }

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })

  }
    return(
        <div className='font-body flex flex-col m-auto justify-center items-center text-center mt-20'>
            <Header color="orange-600"/>
            <h2 className='text-3xl mb-5'>Bienvenue chez nous !</h2>
            <Link className='text-orange-600 text-3xl mb-5' to='/'>Revenir à l'accueil</Link>
            <h3 className='text-xl mb-5'>Inscrivez-vous pour <br /> découvrir notre menu</h3>
            <form className='Login flex flex-col' action="submit" onSubmit={onSubmit}>
                <input className='mb-5 p-1 md:p-2  pr-20 md:pr-40 lg:pr-60 xl:pr-96' value={credentials.lastname} name="lastname" type="text" placeholder='Nom de famille' onChange={onChange} />
                <input className='mb-5 p-1 md:p-2  pr-20 md:pr-40 lg:pr-60 xl:pr-96' value={credentials.firstname} name="firstname" type="text" placeholder='Prénom' onChange={onChange}/>
                <input className='mb-5 p-1 md:p-2  pr-20 md:pr-40 lg:pr-60 xl:pr-96' value={credentials.email} name="email" type="text" placeholder='Email' onChange={onChange}/>
                <input className='mb-5 p-1 md:p-2  pr-20 lg:pr-40' type="password" value={credentials.password} name="password" id="password" placeholder='Mot de passe' onChange={onChange}/>
                <button className='py-1 px-7 m-2 md:py-2 md:m-4 text-white bg-orange-600' type="submit">C'est parti !</button>
            </form>
            <Footer></Footer>
        </div>
    )
}