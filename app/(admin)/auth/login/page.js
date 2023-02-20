"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"

export default function Component() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const { data: session } = useSession()

  const handlerlogin = async (e) => {
    const data = await signIn('credentials', {
      redirect: false,
      username,
      password
    })
    console.log(data)
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.username} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
        <div>
          <input type={"text"} onChange={({ target }) => setUserName(target.value)} />
          <input type={"text"} onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button onClick={() => handlerlogin()}>Sign </button>

    </>
  )
}