import { createClient } from '@supabase/supabase-js'

const URL = 'https://vjelnqucntzsmpezbamr.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWxucXVjbnR6c21wZXpiYW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNTA2NzIsImV4cCI6MjA5NTkyNjY3Mn0.SejFSJdpV3NNcTV-ZAMxD__2qAbufLYUtc8wB54DLrE'
export const supabase = createClient(URL, API_KEY)