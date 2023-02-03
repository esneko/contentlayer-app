import * as React from 'react'

export const Button: React.FC<{ title: string }> = ({ title }) => (
  <div
    style={{
      padding: 10,
      backgroundColor: '#333',
      color: '#fff',
      display: 'inline-block',
      borderRadius: 4,
    }}
    onClick={() => alert('Hello')}
  >
    {title}
  </div>
)
