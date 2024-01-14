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
    <section className="container mx-auto flex justify-center">
      <div className='mt-6'>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <div className='border-gray border-2 rounded-xl'>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='w-full'
              />
              </div>
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <div className='border-gray border-2 rounded-xl'>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className='w-full'
              />
              </div>
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <select
              type="text"
              id="type"
              name="type"
              value={formData.name}
              onChange={handleChange}
              className='w-full border-gray border-2 rounded-xl pt-2 pb-2'
            >
              <option value="">Select Type</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
            </select>
          </div>
          <div>
            <label htmlFor="varietal">Varietal</label>
            <div className='border-gray border-2 rounded-xl '>
            <input
              type="text"
              id="varietal"
              name="varietal"
              value={formData.varietal}
                onChange={handleChange}
                className='w-full'
              />
              </div>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <div className='border-gray border-2 rounded-xl'>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formData.rating}
                onChange={handleChange}
                className='w-full'
              />
              </div>
          </div>
          <div className='pt-4 pb-4'>
            <label htmlFor="consumed" className='mr-2'>Consumed</label>
            <input
              type="checkbox"
              id="consumed"
              name="consumed"
              value={formData.consumed}
              onChange={handleChange}
              className=''
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
          <div className='flex justify-between mt-6'>
            <button
              type="button"
              onClick={handleCancel}
              className='p-4 bg-[#DF1C41] rounded-lg w-1/2 mr-4'
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleSave}
              className='p-4 bg-[#DF1C41] rounded-lg w-1/2'
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
