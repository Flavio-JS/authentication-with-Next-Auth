import { LogoutButton } from "@/components/LogoutButton/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col items-center p-5 gap-6">
      <h1>Bem vindo {session.user?.name}</h1>
      {session.user?.image && (
        <Avatar>
          <AvatarImage src={session.user.image} />
          <AvatarFallback>{session.user.name ?? ""}</AvatarFallback>
        </Avatar>
      )}
      <LogoutButton />
    </div>
  );
}
