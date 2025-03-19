import React from 'react'

export const About = () => {
  return (
    <>
    <div className='about-entire-container'>
      <section id="about-container">
      <h2>How to use the Kanban Board:</h2>
      <ul>
        <p>Press Add Task to open the form</p>
        <p>Fill in the form as you wish</p>
        <p>Post it</p>
      </ul>
      <h3>Voilà!</h3>
        
      </section>
      <section id="about-us-container">
        <div>
          <h2>Rafa</h2>
          <p>is</p>
          <p>student/student</p>
          <p>from</p>
          <p>Brazil</p>
        </div>
        <div className='about-photo'>
          <img src={"./src/assets/img/photo.png"} alt="Our Photo" />
          </div>
        <div>
          <h2>Vince</h2>
          <p>is</p>
          <p>teacher/ student</p>
          <p>from</p>
          <p>France</p>
        </div>
      </section>
    </div>
    </>
  )
}
