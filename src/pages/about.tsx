"user client";

import { useEffect } from "react";

import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import Contributers from "../components/about/contributers";
import PurposeAndAudience from "../components/about/purposeAndAudience";
import { getContributers } from "../lib/octocat";
import { useDispatch } from "react-redux";
import { addContributors } from "../state/reducer.state";
import { Contributor } from "@/types/types";





const About = ({contributors}:{contributors:Contributor[]}) => {

   const dispatch = useDispatch()

    useEffect(() => {
        if (contributors.length > 0){
          dispatch(addContributors(contributors))
        }
      
    }, [contributors]);

    return (
      
      <Section delay={0.2}>
        <Heading
        fontSize='6xl'
        textAlign="center"
          padding={6}
        >
       About
       </Heading>

      

       <Box mb={10}>
           <PurposeAndAudience/>
        </Box>


        <Box mb={10}>
           <Contributers/>
        </Box>
    </Section> 
  );
};

export default About;


export const getStaticProps = async () => {
  let contributors = await getContributers()

  console.log("Contributors Length: ", contributors.length)

  return {
    props: {
      contributors: contributors
    }
  }
}