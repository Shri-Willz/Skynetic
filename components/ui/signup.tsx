"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supabase } from "@/supabase/supabase-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./separator";

const formscheme = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." }),

  email: z.email({ message: "invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        "Must include uppercase, lowercase, number, and special character",
    }),
});

type FormValues = z.infer<typeof formscheme>;

export default function SignUp() {
    const [SignUpErr,setSignUpErr] = useState<string>("")
    const router = useRouter()

    const form = useForm<FormValues>({
    resolver: zodResolver(formscheme),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (Values: FormValues) => {

    try {
      const { data, error } = await supabase.auth.signUp({
        email: Values.email,
        password: Values.password,
      });

      if(error){
        setSignUpErr(error.message);
        return;
      }

      if(data.user){
        router.push("/dashboard")
      }
    } 
    catch (err) {
        console.log("Enexpected error", err)
        console.log("Something Went Wrong", SignUpErr)
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Skynetic</CardTitle>
          <CardDescription>Create your account and take the next step in your career.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your name"
                        {...field}
                        type="text"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Email"
                        {...field}
                        type="text"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Password"
                        {...field}
                        type="text"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="flex flex-col">
                <Button type="submit">Create Account</Button>
                <p>Already Have Account? 
                  <span>
                    <Link
                      href={"/signin"}
                    >
                      Sign In
                    </Link>
                  </span>
                </p>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
