const SUPABASE_URL = 'https://mtroanpiqpqfeavfzgpw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cm9hbnBpcXBxZmVhdmZ6Z3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDEzMzcsImV4cCI6MjA5MjYxNzMzN30.EBIH0krzPbZSrRPF2wHHMx2-9Cac9LZkf2gXtS9FFd8'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)