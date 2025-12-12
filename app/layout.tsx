// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Skynetic Dashboard',
  description: 'Career acceleration dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 UPDATED: 
         - Replaced "bg-white dark:bg-black" with "bg-background"
         - Replaced "text-slate-900" with "text-foreground"
         
         Now, Tailwind will automatically look at your globals.css variables.
         When .dark is active, it swaps to your Deep Navy colors automatically.
      */}
      <body className="bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}