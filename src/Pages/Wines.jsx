import { Link } from "react-router-dom"


const Wines = () => {
  return (
    <section className="container mx-auto">
      <div className="p-4">
        <Link to='/new-wine'>
          <button className="p-4 bg-[#DF1C41] rounded-lg w-1/3">
            Create New Wine
          </button>
        </Link>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Wines
