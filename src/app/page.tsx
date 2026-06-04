"use client";

import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query";

function page() {
  const trpc = useTRPC();
  const { data: users } = useQuery(trpc.getUser.queryOptions());

  return (
    <div className="flex justify-center">
      {JSON.stringify(users)}
    </div>
  )
}

export default page
