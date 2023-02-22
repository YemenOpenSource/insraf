"use client";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react"
import { Success } from "@/components";

export default function Component() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const { data: session } = useSession()

  const hendlerAuth = async () => {
    const data = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    // Error 
    if (data.error) setError(data.error)
  }

  // if (session) return <Success session={session} />

  return (

    <Success />
  )
}