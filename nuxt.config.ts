// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/supabase'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  supabase: {
    url: 'https://zbyxsfwrskcjpcrmzlke.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpieXhzZndyc2tjanBjcm16bGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MjQ0MjcsImV4cCI6MjAyODQwMDQyN30.FbgqPj-BtSaiz6KULDbM-MC1h1470xDkP5thWP0KZKo',
    redirect: false
  }
})
