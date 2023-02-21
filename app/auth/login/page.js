"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"

export default function Component() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { data: session } = useSession()

  const handlerlogin = async (e) => {
    const data = await signIn('credentials', {
      redirect: false,
      email,
      password
    })
  }
console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
        <div>
          <input type={"text"} onChange={({ target }) => setEmail(target.value)} placeholder="e" />
          <input type={"text"} onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button onClick={() => handlerlogin()}>Sign </button>

    </>
  )
}