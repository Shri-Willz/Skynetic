import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SignUp from "@/components/ui/signup";
import SignIn from "@/components/ui/signin";


// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <Tabs defaultValue="Sign-up">
        <TabsList>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-up" className="w-full">
            <SignUp />
        </TabsContent>
        <TabsContent value="sign-in" className="w-full">
            <SignIn />
        </TabsContent>
      </Tabs>
    </div>
  );
}
