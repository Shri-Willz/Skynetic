"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";
import { supabase } from "@/supabase/supabase-client";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    setError("");

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      setError(error.message);
      return;
    }

    // OTP flow → user may be null until email is confirmed
    console.log("OTP sent:", data);
    router.push("/dashboard"); // or show "Check your email"
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Skynetic</CardTitle>
          <CardDescription>
           Log in to access your applications and interview practice
          </CardDescription>
        </CardHeader>

        <CardContent>
            <div>
                <div className="flex w-full items-center flex-col">
            <div className="flex w-full items-center gap-3">
              <Separator className="flex-1" />
                <span className="text-sm text-muted-foreground">Sign up with</span>
              <Separator className="flex-1" />
            </div>
          <div className="w-full flex items-center justify-center gap-6">
              <Button className="bg-transparent hover:bg-transparent" onClick={async()=>{
                const {data,error} = await supabase.auth.signInWithOAuth({
                  provider:"github"
                })
              }}>
                <Image src={"/github.svg"} alt="google Icon to sign up" width={24} height={20}></Image>
              </Button>
              <Button className="bg-transparent hover:bg-transparent">
                <Image src={"/google-icon.svg"} alt="google Icon to sign up" width={24} height={4}></Image>
              </Button>
              <Button className="bg-transparent hover:bg-transparent">
                <Image src={"/linkedin.svg"} alt="google Icon to sign up" width={24} height={4}></Image>
              </Button>
            </div>
          </div>
            </div>
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignIn} className="w-full">
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
