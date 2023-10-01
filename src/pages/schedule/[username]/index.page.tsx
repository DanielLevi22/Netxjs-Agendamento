import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './style'

export default function Schedule() {
  return (
    <Container>
      <UserHeader>
        <Avatar src="https://gitgub.com/daniellevi22.png" />
        <Heading>Daniel Levi</Heading>
        <Text>CTO @Gods</Text>
      </UserHeader>
    </Container>
  )
}
