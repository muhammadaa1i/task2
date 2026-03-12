import { useState } from 'react'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', form)
    setForm(initialForm)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.tagline}>Have a project in mind? Let's talk!</p>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vehicula commodo ipsum et hendrerit. Phasellus habitasse platea
            dictumst vestibulum rhoncus est pellentesque.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
