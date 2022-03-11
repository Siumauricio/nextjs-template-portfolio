import type {NextPage} from 'next';
import Head from 'next/head';
import {Contact} from '../components/common/Contact';
import {Education} from '../components/common/Education';
import {HomePage} from '../components/common/HomePage';
import {Projects} from '../components/common/Projects';
import {Skills} from '../components/common/Skills';

const Home: NextPage = () => {
   return (
      <main>
         <Head>
            <title>Mauricio Siu | Portfolio</title>
            <meta name="description" content="This is related about all my information like skills, projects and about me. " />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomePage />
         <Education />
         <Projects />
         <Skills />
         <Contact />
      </main>
   );
};

export default Home;
