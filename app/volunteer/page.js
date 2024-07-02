import React from 'react'

const Volunteer = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
        <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Women on Missions
          <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble">Want to get Involved?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          You
          <time className="text-xs opacity-50"> 12:46</time>
        </div>
        <div className="chat-bubble">I would love to!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">Volunteer Form</h2>
        <p>Fill out this Form if you would like to volunteer as part of the Women on Missions team.</p>
        <form>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Full Name:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Phone:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Do you want to Volunteer?</span>
        </div>
        <input type="radio" name="yes" className="radio-sm" defaultChecked />
        <input type="radio" name="no" className="radio-sm" />
      </label>
        </form>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Volunteer
