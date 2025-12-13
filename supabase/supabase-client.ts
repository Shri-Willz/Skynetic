import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(

  process.env.SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  
  {
      // Session accessed from Clerk SDK, either as Clerk.session (vanilla
      // JavaScript) or useSession (React)
      accessToken: async () => session?.getToken() ?? null,
  }
)