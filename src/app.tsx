import { FC } from 'react'

import viteLogo from '/vite.svg'

const App: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        gap: '1rem',
      }}
    >
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <span>template.react-app.vite</span>
    </div>
  )
}

export default App
