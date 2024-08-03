import styles from "./page.module.css";
import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Tab Associates - Architects, Builders, Designers, Contractors"
      description="Tab Associates website."
    >
      <Hero />
    </ContainerBlock>
  );
}
