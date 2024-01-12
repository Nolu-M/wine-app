import { Link } from "react-router-dom"



const Home = () => {
  return (
    <section className={`h-screen bg-home-section bg-center bg-cover flex items-center`}>
      <div className="container mx-auto text-white ">
        <div className="flex justify-center p-4">
          <h1>GrapeVine</h1>  
        </div>
        < section>
          <div className="text-center">
            <h2 className="mb-4">Sip, Swirl, Savour: Your Perfect Pour Awaits!</h2>
            <Link to='/wines'>
              <h2>Login</h2>
            </Link>
            <div className="mb-4 mt-4">
              <input className="pt-2 pb-2 text-center" type="text" placeholder="Email address"/>
            </div>
            <div className="mb-4 mt-4">
              <input className="pt-2 pb-2 text-center" type="text" placeholder="Password"/>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home
