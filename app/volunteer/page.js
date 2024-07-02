import React from 'react'

const Volunteer = () => {
  return (
    <div>
      {/* <div className="card bg-base-100 w-full shadow-xl">
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
      </div> */}

      <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
  <figure>
    <img
      src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/445365142_10161093467581068_7723572144457222823_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=ygXZmtBchLMQ7kNvgFVG12n&_nc_ht=scontent-ord5-1.xx&cb_e2o_trans=q&oh=00_AYBOmECSjFrPxqwfDMSK7hz-Q0U1x306qhHaWhar6vIkow&oe=66895E6F"
      alt="Women on Missions volunteering"
      className="object-cover w-auto h-96 mb-14 pl-40"
      />
  </figure>
  <div className="card-body h-90">
        <h2 className="card-title">Volunteer Form</h2>
        <p>Enter your information below to volunteer with the Women on Missions team.</p>
        <form>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Full Name:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Email:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Phone:</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Do you want to Volunteer?</span>
        </div>
        <div className='flex items-center'>
          <input type="radio" name="yes" className="radio-sm my-2" defaultChecked />
          <span className="label-text ml-2 mb-0.75">Yes</span>
        </div>
        <div className='flex items-center'>
          <input type="radio" name="no" className="radio-sm" />
          <span className="label-text ml-2.5 mb-0.75">No</span>
        </div>
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
