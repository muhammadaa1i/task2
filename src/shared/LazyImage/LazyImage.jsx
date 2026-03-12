import { useEffect, useRef, useState } from 'react'

function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}) {
  const imageRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority || shouldLoad) {
      return
    }

    const node = imageRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '240px 0px',
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [priority, shouldLoad])

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'low'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0.01 }}
    />
  )
}

export default LazyImage
