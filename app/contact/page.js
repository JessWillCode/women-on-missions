import React from 'react'

const Contact = () => {
  return (
    <div className='mt-[250px] sm:w-full h-screen flex justify-center items-center p-8'>
        <form method='POST' action='https://getform.io/f/da489b5b-bce6-4dd0-af53-10af56c502b4' className='flex flex-col w-full'>
            <div className=' flex flex-col justify-center items-center'>
                <p className='text-4xl inline border-b-4 pb-6'>Contact Us</p>
                <p className='text-2xl text-center mt-3 py-2'>Submit the form below and we will be in touch!</p>
            <div className='flex flex-col max-w-[525px] w-full'>
            <input className='my-2 p-4' type='text' placeholder='Name' name='name' />
            <input className='my-2 p-4' type='email' placeholder='Email' name='email' />
            <textarea className='my-2 p-4' name='message' rows='10' placeholder='Message'></textarea>
            </div>
            </div>
            <button className='btn btn-primary w-[130px] mx-auto mt-4'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
