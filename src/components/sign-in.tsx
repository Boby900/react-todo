import { signIn } from "@/app/auth"
 
export function SignIn() {
  return (
    <form
    action={async () => {
        "use server"
        await signIn()
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}