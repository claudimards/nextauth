import { AuthContext } from '../contexts/AuthContext'
import { FormEvent, useContext, useState } from 'react'

import styles from '../../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <div className={styles.container}>
      <form className={styles.main} onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
