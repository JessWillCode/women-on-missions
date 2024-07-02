import React from 'react'

const Missions = () => {
  return (
    <div>
      <h1> Our recent Missions</h1>
      <ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start timeline-box">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="tooltip" data-tip="click me">
          <h2 className="card-title">Celebrate Recovery</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-end timeline-box">Decorating the Nursing Home</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">Cross Hide 'n Seek</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-end timeline-box">Ronald McDonald House</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">First Responder BBQ</div>
  </li>
</ul>
    </div>
  )
}

export default Missions
