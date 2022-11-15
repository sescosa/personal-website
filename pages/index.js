import Head from 'next/head';
import Image from 'next/image';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Rounded from '../components/Rounded';

export default function Home({currentYear, images, links, bio}) {
  return (
    <Layout>
      <Head>
        <title>Home · Sergio Escosa</title>
        <meta name="description" content="Sergio Escosa personal website" />
      </Head>

      <section id='this-is-me' className='py-6'>
        <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
          <div className='
          flex 
          flex-col-reverse 
          md:flex-row 
          justify-center 
          items-center 
          space-y-4 
          md:space-y-0
          space-x-0
          md:space-x-4
          '>
            <div className='
            mt-4
            md:mt-0
            flex
            justify-center
            items-center
            flex-row
            md:flex-col
            space-y-0
            md:space-y-2
            space-x-2
            md:space-x-0
            '>
              <Rounded imgPath={images.linkedin} href={links.linkedin}></Rounded>
              <Rounded imgPath={images.github} href={links.github}></Rounded>
              <Rounded imgPath={images.twitter} href={links.twitter}></Rounded>
            </div>
              <Image src="/me.jpeg" width="224" height="224" className='rounded-full bg-center bg-cover bg-no-repeat shadow-md hover:shadow-lg hover:scale-105 transform duration-500 z-20 flex-none'></Image>
          </div>
          <div className='max-w-md px-4 mt-6 md:mt-0 md:p-0 ml-0 md:ml-5 text-sm text-justify md:text-left'>
            <Bio bio={bio}></Bio>
          </div>
        </div>
      </section>
      
      <section id="my-path" className='py-6'>
        <h1 className='text-2xl text-center'>Work in progress</h1>
      </section>
      </Layout>
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      currentYear: new Date().getFullYear(),
      images: {
        me: "/me_image.jpg",
        linkedin: "/linkedin_logo.png",
        github: "/github_logo.png",
        upcLogo: "/upc_logo.png",
        twitter: "/twitter_logo.png",
      },
      links: {
        linkedin: "https://www.linkedin.com/in/sergio-escosa/",
        github: "https://github.com/sescosa",
        twitter: "https://twitter.com/sergio_escosa",
      },
      bio: {
        title: "Hi there! Welcome to my site,",
        paragraphs: [
          "I am Sergio Escosa, borned in Barcelona, now living in Amsterdam. I am passionate about building technologies and services that generate a positive impact on society.",
          "I have worked in business intelligence and data science in the past. Then started my own company in the EdTech sector. I currently work at Adyen, a fintech company, as a Business Analyst.",
          "I am also involved and have interest in artificial intelligence, the aerospace industry, online payments and other cool stuff.",
          "Scroll down to discover more. See you soon!"
        ]
      }
    },
  }
}