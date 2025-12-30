import { useState } from "react";

import logo from "@/assets/logo.svg";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SectionDivisor } from "@/components/SectionDivisor";
import { Label } from "@/components/ui/label";
import { UserRoundPlusIcon } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => { }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center gap-6">
      <img src={logo} className="w-36 h-8" />
      <Card className="w-full max-w-md rounded-xl">
        <CardHeader className="items-center">
          <CardTitle className="text-xl font-bold">
            Fazer Login
          </CardTitle>
          <CardDescription>
            Entre na sua conta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-700">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="mail@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="ml-2 text-gray-700">Lembrar-me</Label>
              </div>
              <a href="#" className="text-sm text-brand-base font-medium hover:underline">Recuperar Senha</a>
            </div>

            <Button type="submit" className="w-full bg-brand-base">Entrar</Button>

            <SectionDivisor content="ou" />

            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-gray-600 font-normal text-sm">Ainda não tem uma conta?</span>
              <Button variant={"secondary"} type="button" className="w-full">
                <UserRoundPlusIcon />
                <span>
                  Criar conta
                </span>
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}