import Feedbacks from 'Components/FeedBacks/Feedbacks'
import Footer from 'Components/Footer/Footer'
import Header from 'Components/Header/Header'
import Hero from 'Components/Hero/Hero'
import MyWorks from 'Components/MyWorks/MyWorks'
import Services from 'Components/Services/Services'
import Tech from 'Components/Tech/Tech'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>GTT</title>
        <meta name="description" content="Tani-Tampuri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Hero/>
        <Tech/>
        <MyWorks/>
        <Services/>
        <Feedbacks/>
        <Footer/>
        </main>
    </>
  )
}
