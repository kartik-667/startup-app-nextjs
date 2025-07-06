import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers

// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"


// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }

// export default NextAuth(authOptions)