import React from 'react'

function Form() {
    return (
    <div>
      <section class="contact" id="contact">
      
      {/* Page Title */}
      <h2>Get In Touch With Me</h2>

      {/* Contact Container */}
      <div class="contact-form-container">

        {/* Contact Form */}
        <div class="contact-form">
          <form action="" method="">
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>

      </div>

      </section>
    </div>

    )
}


export default function ContactMaterial() {
  return (
    <Form />
  )
}