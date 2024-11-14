import React from 'react'
import { ScaleLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <ScaleLoader color="#3498DB" />
    </div>
  )
}
