import { useState } from 'react'

function NewWine() {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    type: '',
    varietal: '',
    rating: '',
    consumed: false,
    date: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      year: '',
      type: '',
      varietal: '',
      rating: '',
      consumed: false,
      date: '',
    });

    console.log('Form canceled');
  };

  const handleSave = () => {

    console.log('Form saved', formData);
  };



  return (
    <section className="container mx-auto">
      <div className=''>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <select
              type="text"
              id="type"
              name="type"
              value={formData.name}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
            </select>
          </div>
          <div>
            <label htmlFor="varietal">Varietal</label>
            <input
              type="text"
              id="varietal"
              name="varietal"
              value={formData.varietal}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="consumed">Consumed</label>
            <input
              type="checkbox"
              id="consumed"
              name="consumed"
              value={formData.consumed}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-between mt-4'>
            <button
              type="button"
              onClick={handleCancel}
              className=''
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleSave}
              className=''
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewWine
