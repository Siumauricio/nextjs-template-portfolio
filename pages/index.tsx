import type {NextPage} from 'next';
import Head from 'next/head';
import {Contact} from '../components/common/Contact';
import {HomePage} from '../components/common/HomePage';
import {Projects} from '../components/common/Projects';
import {Skills} from '../components/common/Skills';

const Home: NextPage = () => {
   return (
      <div className="">
         <Head>
            <title>Mauricio Siu | Portfolio</title>
            <meta name="description" content="This is related about all my information like skills, projects and about me. " />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomePage />
         <Projects />
         <Skills />
         <Contact />
      </div>
   );
};

export default Home;
