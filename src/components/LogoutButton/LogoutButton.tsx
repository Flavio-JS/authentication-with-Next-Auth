"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <Button type="button" onClick={() => signOut()}>
      Logout
      <LogOut />
    </Button>
  );
};
