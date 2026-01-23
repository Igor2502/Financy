import React, { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionDivisor } from "@/components/SectionDivisor";
import { Label } from "@/components/ui/label";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/auth";

export function User() {
  const { user, logout } = useAuthStore()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center gap-6">
      <Card className="w-full max-w-md rounded-xl">
        <CardHeader className="items-center mb-4">
          <div className="bg-gray-200 p-2 rounded-full w-16 h-16 flex items-center justify-center">
            <span className="font-medium text-gray-800 text-2xl">{user?.name?.slice(0, 2)?.toUpperCase()}</span>
          </div>
          <CardTitle className="text-xl font-semibold text-gray-800 mt-2">
            {user?.name}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {user?.email}
          </CardDescription>
          <div className="border-b border-b-gray-200 w-full mt-8"></div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700">Nome completo</Label>
              <Input
                id="name"
                type="text"
                value={user?.name}
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={user?.email}
                placeholder="mail@example.com"
                disabled
              />
            </div>

            <span className="text-xs text-gray-500">O e-mail não pode ser alterado</span>

            <Button type="submit" className="w-full bg-brand-base">Salvar alterações</Button>

            <Button
              type="button"
              className="w-full bg-gray-100 flex justify-center items-center gap-2 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors border-gray-200 border-2"
              onClick={handleLogout}
            >
              <LogOutIcon className="text-danger" />
              <span>Sair da conta</span>
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}