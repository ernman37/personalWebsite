/*
 *    File: Home.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Sunday May 07 2023 at 05:32:59 PM
 *    For: 
 *    Description:
*/
import {Box, Paragraph, Heading, Image} from "grommet";
import Ernest from '../photos/Ernest-Duckworth.jpeg'
import Website from '../photos/Website.png'

export default function Home(){

    return(
        <Box height="84vh" width='100vw' overflow="auto">
            <Box alignSelf='center' width='80vw' direction='column'>
                <Heading alignSelf='center'>
                    Welcome 
                </Heading>
                <Box alignSelf='center' pad='medium' direction='row-responsive' flex='grow'>
                    <Paragraph textAlign="center" alignSelf='center'>
                        Hello my name is Ernest, I am a Software Engineer currently getting my bachelors in Computer Science with a concentration in Software Engineering at Colorado State University. <br/> Go Rams! 
                    </Paragraph>
                    <Image margin='medium' alignSelf='center' height="180px" width="200px" src={Ernest}/>
                </Box>
                <Heading alignSelf='center'>
                    Website
                </Heading>
                <Box alignSelf='center' pad='medium' direction='row-responsive' flex='grow'>
                    <Image margin='medium' alignSelf='center' height="220px" width="320px" src={Website}/>
                    <Paragraph textAlign="center" alignSelf='center'>
                        This website is built on TypeScript React and utilizes Google Firebase for a database. I used this website to better my understanding of reactive website design and project management. 
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    );
}
