
import {
    Heading,
    Box,
    Button,
    Text,
} from "@chakra-ui/react";
import {SimpleGrid} from "@chakra-ui/react";
import {GridItem} from "@chakra-ui/react";
import CONTRIBUTERS from "../../data/contributers";
import { useHackathonContext } from "../../state/provider.state";
import ContributerCard from "./contributerCard";


function Contributers() {

    const  {state} = useHackathonContext()

    return ( 
    
    <Box><Heading>Contributers</Heading>

    <Text mt={5} mb={10} align={"center"}>This project wouldnt come this far without
        these lovely heroes. I mean if you need someone to do your work, Please get in
        touch with these guys. They are awesome!.
    </Text>

    <SimpleGrid
        columns={{
        base: 1,
        sm: 2,
        md: 3,
        lg: 4
    }}
        spacing="12">
        {state.contributers.map(contributer => (
            <GridItem><ContributerCard contributer={contributer}/></GridItem>
        ))}

    </SimpleGrid> </Box>);
}

export default Contributers;