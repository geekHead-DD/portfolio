import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Debarghya Datta
          </Heading>
          <p>Digital Nomad</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ujan.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
         
        I am a Senior Analyst at Deloitte, with 1 year and 6 months of experience on the team.
        During this time, I have earned certifications in Anaplan Level 1, Level 2, Level 3,
        and The Anaplan Way, along with several other qualifications that reflect my dedication
        to professional growth. I hold a B.Tech in Computer Science and Engineering from IEM Kolkata.
        <br></br> <br></br>
        Driven by a passion for innovation, I excel at leveraging technology to address complex
        business challenges and deliver strategic solutions. As a quick learner with a strong
        commitment to continuous improvement, I actively explore emerging tools and technologies
        to expand my expertise. My goal is to create meaningful impact by driving innovation and
        adding value to every project I undertake. 


          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1nmV333tLb-d1M1KqjDM1mhkGY8HfaPim/view?usp=sharing" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Tools:</BioYear>
          <Paragraph> Anaplan • Anaplan Connector
          • MS Excel • Postman • AWS </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>Languages:</BioYear>
          <Paragraph>Python • Java</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>Databases:</BioYear>
          <Paragraph>MySQL • MongoDB </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>IDE:</BioYear>
          <Paragraph>VS Code • PyCharm</Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://www.instagram.com/freezeframe.dd/" target="_blank">
            Photography
          </Link>,
          Games, Reading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/geekHead-DD" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @geekHead-DD
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @inkdrop_app
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://www.linkedin.com/in/debarghya-datta-383b341a5/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @DebarghyaDatta
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/QfsG5Kj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
