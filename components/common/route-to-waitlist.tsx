"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

const ReRouteToWaitlist = () => {
    const router = useRouter();

    useEffect(()=>{
        router.push("/waitlist")
    })
  return null
}

export default ReRouteToWaitlist