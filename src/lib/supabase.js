// Supabase client — not used by the homepage yet.
// Import it where the app needs data/auth: import { supabase } from './lib/supabase'
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && key ? createClient(url, key) : null
