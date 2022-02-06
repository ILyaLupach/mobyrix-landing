import { useEffect, useState } from 'react'

interface IWindowSizeState {
  width?: number,
  height?: number,
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSizeState>({})

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
