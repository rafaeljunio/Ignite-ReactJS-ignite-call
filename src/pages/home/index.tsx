import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import { NextSeo } from 'next-seo'
import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendario e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte se calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
