"use client";

import { currentUser } from "@clerk/nextjs/server";
export const User = async () => {
  const user = await currentUser();
  return { user };
};
