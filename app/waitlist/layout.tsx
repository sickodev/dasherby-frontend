import { ChildrenProps } from '@/lib/types'
import React from 'react'

const WaitlistLayout = (props: ChildrenProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default WaitlistLayout