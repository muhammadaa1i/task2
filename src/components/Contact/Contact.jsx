import { useState, useId } from 'react'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', phone: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = { ...initialErrors }
  if (!form.name.trim()) errors.name = 'Your name is required.'
  if (!form.email.trim()) errors.email = 'Email address is required.'
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (!form.message.trim()) errors.message = 'A message is required.'
  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const messageId = useId()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    if (hasErrors(nextErrors)) {
      setErrors(nextErrors)
      return
    }
    // Success path
    console.log('Form submitted:', form)
    setForm(initialForm)
    setErrors(initialErrors)
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.headingRow}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <span className={styles.line} />
          </div>
          <p className={styles.tagline}>Have a project in mind? Let's talk!</p>
          <p className={styles.body}>
            Ready to bring your idea to life? Fill out the form and one of our
            specialists will get back to you within one business day.
          </p>
        </div>

        {submitted ? (
          <div className={styles.successBanner} role="alert">
            <span className={styles.successIcon}>✓</span>
            <div>
              <strong>Message sent successfully!</strong>
              <p>Thank you for reaching out. We'll be in touch shortly.</p>
            </div>
            <button className={styles.successReset} onClick={handleReset}>
              Send another
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor={nameId} className={styles.srOnly}>Your Name</label>
              <input
                id={nameId}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                aria-describedby={errors.name ? `${nameId}-err` : undefined}
                aria-invalid={!!errors.name}
                required
              />
              {errors.name && (
                <span id={`${nameId}-err`} className={styles.errorMsg} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor={emailId} className={styles.srOnly}>Email Address</label>
              <input
                id={emailId}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                aria-describedby={errors.email ? `${emailId}-err` : undefined}
                aria-invalid={!!errors.email}
                required
              />
              {errors.email && (
                <span id={`${emailId}-err`} className={styles.errorMsg} role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone (optional) */}
            <div className={styles.field}>
              <label htmlFor={phoneId} className={styles.srOnly}>Phone Number (optional)</label>
              <input
                id={phoneId}
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label htmlFor={messageId} className={styles.srOnly}>Message</label>
              <textarea
                id={messageId}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                aria-describedby={errors.message ? `${messageId}-err` : undefined}
                aria-invalid={!!errors.message}
                required
              />
              {errors.message && (
                <span id={`${messageId}-err`} className={styles.errorMsg} role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button className={styles.button} type="submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
