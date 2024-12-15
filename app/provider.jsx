"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && saveUserInfo();
  }, [user]);

  const saveUserInfo = async () => {
    const result = await axios.post("/api/user", { user: user });
    console.log(result);
  };

  return <div>{children}</div>;
}

export default Provider;
