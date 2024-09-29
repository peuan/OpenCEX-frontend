import { Container } from "@mui/material"
import CoinSection from "~/components/CoinSection"
import ContentSection from "~/components/ContentSection"
import HeroSection from "~/components/HeroSection"
import OfferSection from "~/components/OfferSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <ContentSection />
        <CoinSection />
      </Container>
      <OfferSection />
    </>
  )
}
