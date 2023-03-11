"use client";
import { Success } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/hooks/queries";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

export default function page() {
  const id = getCookie("userId")
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: Number(id) },
  });

  const router = useRouter()

  const logout = () => {
    deleteCookie("token")
    deleteCookie("userId")
    return router.push("/")
  }

  if (loading) return;
  if (error) return `Error! ${error}`;

  return (
    <Success name={data?.user?.name} logout={logout} />
  )
}
