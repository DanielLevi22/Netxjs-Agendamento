import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previwImage from '../../assets/appPreview.png'
import { ClaimUsernameFom } from './components/ClaimUsernameFom'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda! | cal"
        description="Connect seu calendar e permita q as pessoas marque agendamento no seu tempo livre"
      />
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameFom />
        </Hero>
        <Preview>
          <Image
            src={previwImage}
            height={400}
            quality={100}
            priority
            alt="Calendario simbolizando a aplicacao em funcionamento."
          />
        </Preview>
      </Container>
    </>
  )
}
