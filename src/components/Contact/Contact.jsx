import { useState, useId } from 'react'
import styles from './Contact.module.css'
import { useTranslation } from 'react-i18next'

const initialForm = { name: '', email: '', phone: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form, t) {
  const errors = { ...initialErrors }
  if (!form.name.trim()) errors.name = t('contact.errors.nameRequired')
  if (!form.email.trim()) errors.email = t('contact.errors.emailRequired')
  else if (!EMAIL_RE.test(form.email)) errors.email = t('contact.errors.emailInvalid')
  if (!form.message.trim()) errors.message = t('contact.errors.messageRequired')
  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

function Contact() {
  const { t } = useTranslation()
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
    const nextErrors = validate(form, t)
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
            <h2 className={styles.heading}>{t('contact.heading')}</h2>
            <span className={styles.line} />
          </div>
          <p className={styles.tagline}>{t('contact.tagline')}</p>
          <p className={styles.body}>
            {t('contact.body')}
          </p>
        </div>

        {submitted ? (
          <div className={styles.successBanner} role="alert">
            <span className={styles.successIcon}>✓</span>
            <div>
              <strong>{t('contact.successTitle')}</strong>
              <p>{t('contact.successBody')}</p>
            </div>
            <button className={styles.successReset} onClick={handleReset}>
              {t('contact.sendAnother')}
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor={nameId} className={styles.srOnly}>{t('contact.fields.nameLabel')}</label>
              <input
                id={nameId}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                type="text"
                name="name"
                placeholder={t('contact.fields.nameLabel')}
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
              <label htmlFor={emailId} className={styles.srOnly}>{t('contact.fields.emailLabel')}</label>
              <input
                id={emailId}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email"
                name="email"
                placeholder={t('contact.fields.emailLabel')}
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
              <label htmlFor={phoneId} className={styles.srOnly}>{t('contact.fields.phoneLabel')}</label>
              <input
                id={phoneId}
                className={styles.input}
                type="tel"
                name="phone"
                placeholder={t('contact.fields.phoneLabel')}
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label htmlFor={messageId} className={styles.srOnly}>{t('contact.fields.messageLabel')}</label>
              <textarea
                id={messageId}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                name="message"
                placeholder={t('contact.fields.messageLabel')}
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
              {t('contact.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
