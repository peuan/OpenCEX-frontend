import { Container } from "@mui/material";
import CoinSection from "~/components/CoinSection";
import Hero from "~/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CoinSection />
      </Container>
    </>
  );
}
