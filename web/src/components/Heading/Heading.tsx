import { Box, BoxProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import UnderlinedText from 'src/components/ui/UnderlinedText'

interface Props extends BoxProps {
  underlineColor: string
  emoji?: string
}

const Heading = ({
  children,
  underlineColor,
  emoji,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Box
      as="h1"
      mt={10}
      mb={6}
      fontSize="3xl"
      lineWidth="wide"
      fontWeight="bold"
      textAlign="left"
      {...props}
    >
      <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
      {emoji ? ` ` : emoji}
    </Box>
  )
}

export default Heading
