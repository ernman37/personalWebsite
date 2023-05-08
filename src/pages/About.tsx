/*
 *    File: About.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Sunday May 07 2023 at 05:32:23 PM
 *    For: 
 *    Description:
*/
import { Box, Heading, Paragraph } from "grommet";
import { ImageCarousel } from '../components/ImageCarousel';
import friends1 from '../photos/friends1.JPG';
import friends2 from '../photos/friends2.JPG';
import friends3 from '../photos/friends3.JPG';
import friends4 from '../photos/friends4.JPG';
import friends5 from '../photos/friends5.JPG';
import friends6 from '../photos/friends6.JPG';
import friends7 from '../photos/friends7.JPG';
import friends8 from '../photos/friends8.JPG';
import friends9 from '../photos/friends9.JPG';
import friends10 from '../photos/friends10.JPG';
import hobby1 from '../photos/hobby1.jpg';
import hobby2 from '../photos/hobby2.jpg';
import hobby3 from '../photos/hobby3.png';
import hobby4 from '../photos/hobby4.png';
import hobby5 from '../photos/hobby5.jpg';

export default function EducationPage(){
    const friendsImagesLinks = [
        friends1,
        friends2,
        friends3,
        friends4,
        friends5,
        friends6,
        friends7,
        friends8,
        friends9,
        friends10
    ];

    const hobbiesImagesLinks = [
        hobby1,
        hobby2,
        hobby3,
        hobby4,
        hobby5
    ]


    return(
        <Box height="84vh" width='100vw' overflow="auto">
            <Box width='80vw' alignSelf='center'>
                <Heading alignSelf='center'>
                    About Me
                </Heading>
                <Box alignSelf='center' flex='grow'>
                    <Paragraph textAlign='center'>
                        My name is Ernest Duckworth IV. I am an undergraduate student at Colorado State University studying Computer Science with a concentration in Software Engineering. 
                    </Paragraph>
                    <Paragraph textAlign='center'>
                        I currently am a research assistant at CSU working on Blockchain construction and query execution. This Summer I will be interning at Hewlett Packard Enterprises as a Software Engineering Intern. 
                    </Paragraph>
                </Box>
                <Heading alignSelf='center'>
                    Hobbies
                </Heading>
                <Box alignSelf='center' flex='grow' direction='row-responsive'>
                    <ImageCarousel images={hobbiesImagesLinks}/>
                    <Paragraph textAlign='center'>
                        Whenever I have free time I like to spend my time exploring and enjoying all the wonderful things Colorado has to offer. You'll likely catch me on my bike, at the lake or hiking.
                    </Paragraph>
                </Box>
                <Heading alignSelf='center'>
                    Acknowledgments
                </Heading>
                <Box alignSelf='center' flex='grow' direction='row-responsive'>
                    <Paragraph textAlign='center'>
                        I'd like to thank my family, friends, co-workers, instructors and peers for not only supporting but also constantly challenging me to better myself in every aspect of life. Without them I am certain I would not be where I am today. 
                    </Paragraph>
                    <ImageCarousel images={friendsImagesLinks}/>
                </Box>
            </Box>
        </Box>
    );
}