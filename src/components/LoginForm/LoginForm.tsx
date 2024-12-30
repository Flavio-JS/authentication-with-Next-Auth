import { cn } from "@/lib/utils";
import { GitHubLoginButton } from "@/components/LoginForm/GitHubLoginButton/GitHubButton";
import { GoogleLoginButton } from "@/components/LoginForm/GoogleLoginButton/GoogleLoginButton";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold">Bem vindo!</h1>
            <div className="text-center text-sm">
              Faça o login para continuar
            </div>
          </div>
          <div className="grid gap-4">
            <GitHubLoginButton />
            <GoogleLoginButton />
          </div>
        </div>
      </form>
    </div>
  );
}
