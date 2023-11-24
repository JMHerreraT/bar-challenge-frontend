import React from 'react'

type Props = {
    children: React.ReactNode;
    className: string;
}

const Button = ({ className, children }: Props) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Button