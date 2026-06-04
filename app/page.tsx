import { Suspense } from "react"
import Header from "@/components/Header"
import Hero from "@/components/MyComponents/Hero"
import Footer from "@/components/Footer"
import CardSection from "@/components/MyComponents/CardSection"

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <CardSection />
      </main>
      <Footer />
    </>
  )
}
