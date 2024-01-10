import { Link } from "react-router-dom"



const Home = () => {
  return (
    <section className={`h-screen bg-home-section bg-center bg-cover`}>
      <div>
        <h1>GrapeVine</h1>  
      </div>
      <section>
        <div>
          <Link to='/wines'>
            <h2>Login</h2>
          </Link> 
        </div>
      </section>
    </section>
  )
}

export default Home
