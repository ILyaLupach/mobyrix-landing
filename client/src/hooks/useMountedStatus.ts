import React, { useEffect, useRef } from 'react';

const useMountedStatus = () => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])


  return isMounted
}

export default useMountedStatus
