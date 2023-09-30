import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previwImage from '../../assets/appPreview.png'
import { ClaimUsernameFom } from './components/ClaimUsernameFom'

export default function Home() {
  return (
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
  )
}
