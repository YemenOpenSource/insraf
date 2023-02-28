"use client";
import { Success } from "@/components";
import { useQuery } from "@apollo/client";
// import { GET_USER } from "@/hooks/queries";
import { getCookie } from "cookies-next";
import { gql } from "@apollo/client";
// import { EVENT_FIELDS } from "./fragments"
 const GET_USER = gql`
  query User($id: ID!) {
    user(id: id) {
      name
    }
  }
`;
export default function page() {
  const id = getCookie("userId")

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: Number(7) },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  console.log(data)
  return (
    <Success />
  )
}
