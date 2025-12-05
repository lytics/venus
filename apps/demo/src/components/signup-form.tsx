"use client"

import { cn } from "@/lib/utils"
import { Button, Input, FieldLabel } from "@contentstack/venuscn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FieldLabel htmlFor="first-name">First name</FieldLabel>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <FieldLabel htmlFor="last-name">Last name</FieldLabel>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
              <div className="grid gap-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Create an account
              </Button>
              <Button variant="secondary" className="w-full">
                Sign up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/dashboard" className="underline underline-offset-4">
                Go to Dashboard
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
