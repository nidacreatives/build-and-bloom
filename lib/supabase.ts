import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://lxcpoxtbddwwogjxyjag.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_BTMZfd4VPQhSkOVHEM8uNQ_TyZj7agz';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
