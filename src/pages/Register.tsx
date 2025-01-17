import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { api } from "@/api";
import { Button } from "@shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/card";
import { Input } from "@shadcn/input";
import { Label } from "@shadcn/label";
import { useMutation } from "@tanstack/react-query";

import { RegisterRequestDto } from "../api/types";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: register } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (requestDto: RegisterRequestDto) => {
      const token = await api.user.register(requestDto);
      return token;
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: error => {
      console.error("Error registering: ", error);
    },
  });
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="gap-4 m-6">
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>{" "}
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={async () => {
                try {
                  await register({
                    email,
                    name: `${firstName} ${lastName}`,
                    password,
                  });
                } catch (error) {
                  alert("Bad Request");
                }
              }}
            >
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline"
            >
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
