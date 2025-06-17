import LoadingPage from '@/components/LoadingScreen/Loading'
import React from 'react'

const loading = () => {
  const name="Article"
  const para="article"
  return (
    <div><LoadingPage name={name} para={para} /></div>
  )
}

export default loading