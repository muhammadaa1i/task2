const iconPaths = {
  'laptop-code': (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2.5" fill="#1f79e3" />
      <rect x="5.3" y="6.1" width="13.4" height="8.8" rx="1.4" fill="#7fc7ff" />
      <rect x="8" y="18" width="8" height="1.7" rx="0.85" fill="#1d2b57" />
      <rect x="14" y="11.6" width="7.2" height="7.2" rx="1.6" fill="#123e87" />
      <circle cx="17.6" cy="15.2" r="1.55" fill="#f5c12e" />
      <path d="m16.7 14.9.7-.8m1.9 2.2.7-.8" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2.2" fill="#123e87" />
      <rect x="8.25" y="3.6" width="7.5" height="14.6" rx="1.2" fill="#2190f5" />
      <rect x="8.25" y="3.6" width="7.5" height="2.2" rx="1" fill="#ef7a46" />
      <rect x="11.1" y="19.3" width="1.8" height="1.8" rx="0.9" fill="#9fd0ff" />
      <path d="m10.2 10.6 2.1 2.2 1.8-2" stroke="#9fd0ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  palette: (
    <>
      <circle cx="11.2" cy="12.2" r="7" fill="#2e91f4" />
      <circle cx="8.4" cy="8.7" r="1.1" fill="#f05349" />
      <circle cx="11.6" cy="7.5" r="1.1" fill="#f6d049" />
      <circle cx="14.7" cy="8.6" r="1.1" fill="#66d05f" />
      <circle cx="15.5" cy="12.1" r="1.1" fill="#8f6df0" />
      <path d="M12.7 18.1c0-1.5 1.1-2.6 2.6-2.6h.6a1.8 1.8 0 0 0 0-3.6h-1.1" stroke="#d8ecff" strokeWidth="1.2" strokeLinecap="round" />
      <path d="m13.7 5.1 6.3 6.3" stroke="#f4bf36" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m19.5 10.8 2.2 2.2-1.3 1.3-2.2-2.2" fill="#e8ecf6" />
    </>
  ),
  tools: (
    <>
      <path d="M12 4.4a1.8 1.8 0 0 1 3.6 0v.5c.6.2 1.2.5 1.7 1l.5-.3a1.8 1.8 0 1 1 1.8 3.1l-.5.3c.1.6.1 1.2 0 1.8l.5.3a1.8 1.8 0 1 1-1.8 3.1l-.5-.3c-.5.4-1.1.8-1.7 1v.5a1.8 1.8 0 0 1-3.6 0v-.5c-.6-.2-1.2-.5-1.7-1l-.5.3a1.8 1.8 0 1 1-1.8-3.1l.5-.3a5.8 5.8 0 0 1 0-1.8l-.5-.3a1.8 1.8 0 1 1 1.8-3.1l.5.3c.5-.4 1.1-.8 1.7-1z" fill="#196dc5" />
      <circle cx="13.8" cy="10.1" r="2.3" fill="#a8d5ff" />
      <path d="m5 19.4 5.7-5.7 1.6 1.6-5.7 5.7H5z" fill="#203b6b" />
      <path d="m10.7 13.7 1.6 1.6" stroke="#d8ebff" strokeWidth="1" />
      <circle cx="18.5" cy="15.3" r="2.8" fill="#f3b63d" />
      <path d="M18.5 13.8v3m-1.5-1.5h3" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
    </>
  ),
  facebook: <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v5h3v-5h2.3l.7-3H13V9a1 1 0 0 1 1-1z" />, 
  twitter: <path d="M19 7.2c-.6.3-1.2.5-1.9.6a3.3 3.3 0 0 0-5.7 3v.7A9.3 9.3 0 0 1 5 8.3a3.3 3.3 0 0 0 1 4.4 3 3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.6 3.2c-.4.1-.9.2-1.3 0a3.3 3.3 0 0 0 3 2.3A6.7 6.7 0 0 1 4 19.2a9.5 9.5 0 0 0 14.6-8c0-.2 0-.4 0-.6.7-.4 1.2-.9 1.6-1.5z" />,
  slack: (
    <>
      <path d="M9.4 4.5A2.1 2.1 0 1 1 7.3 2.4h2.1z" />
      <path d="M10.5 4.5A2.1 2.1 0 0 1 12.6 2.4v5.2a2.1 2.1 0 1 1-4.2 0V4.5z" />
      <path d="M19.5 9.4A2.1 2.1 0 1 1 21.6 7.3v2.1z" />
      <path d="M19.5 10.5A2.1 2.1 0 0 1 21.6 12.6h-5.2a2.1 2.1 0 1 1 0-4.2h3.1z" />
      <path d="M14.6 19.5A2.1 2.1 0 1 1 16.7 21.6h-2.1z" />
      <path d="M13.5 19.5A2.1 2.1 0 0 1 11.4 21.6v-5.2a2.1 2.1 0 1 1 4.2 0v3.1z" />
      <path d="M4.5 14.6A2.1 2.1 0 1 1 2.4 16.7v-2.1z" />
      <path d="M4.5 13.5A2.1 2.1 0 0 1 2.4 11.4h5.2a2.1 2.1 0 1 1 0 4.2z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  x: (
    <>
      <path d="M5 5h4l3 4 3-4h4l-5 7 5 7h-4l-3-4-3 4H5l5-7z" />
    </>
  ),
}

function Icon({ name, className, ariaHidden = true }) {
  const icon = iconPaths[name]

  if (!icon) {
    return null
  }

  const colorfulServiceIcon = ['laptop-code', 'mobile', 'palette', 'tools'].includes(name)

  return (
    <svg
      viewBox="0 0 24 24"
      fill={colorfulServiceIcon ? 'none' : 'currentColor'}
      stroke={colorfulServiceIcon ? 'none' : 'currentColor'}
      strokeWidth={colorfulServiceIcon ? 0 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      className={className}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {icon}
    </svg>
  )
}

export default Icon
