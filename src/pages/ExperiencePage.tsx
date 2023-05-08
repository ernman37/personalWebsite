/*
 *    File: Experience.tsx
 *    Creator: Ernest M Duckworth IV
 *    Created: Sunday May 07 2023 at 05:24:51 PM
 *    For: 
 *    Description:
*/
import { Box, Heading, Paragraph, Carousel } from "grommet";
import { useState, useEffect } from 'react';
import Experience from '../models/Experience';
import { ExperienceApi } from '../apis/ExperienceApi'
import ExperienceCard from '../components/cards/ExperienceCard';

export default function ProjectsPage(){
    const [experience, setExperience] = useState<Experience[]>([]);

    useEffect(() => {
        const fetchExperience = async () => {
            const loadedProjects = await ExperienceApi.getExperiences();
            setExperience(loadedProjects);
        };
        fetchExperience();
    }, []);

    return(
        <Box height="84vh" width='100vw' overflow="auto">
            <Box width='80vw' alignSelf='center' flex='grow'>
                <Heading alignSelf='center'>
                    Experience
                </Heading>
                <Box alignSelf='center' flex='grow'>
                    <Paragraph textAlign='center'>
                        I have been lucky enough to be apart of two research studies throughout my time at CSU. I have accepted a position at Hewlett Packard Enterprises as a Software Engineering Intern for the Summer of 2023 I am so excited to begin my journey in corporate world of CS! 
                    </Paragraph>
                    <Paragraph textAlign='center'>
                        I look forward to continuously learning after I graduate from CSU and expanding my knowledge and skills in the world of Computer Science. 
                    </Paragraph>
                </Box>
            </Box>
            <Heading alignSelf='center'>
                Work Experience
            </Heading>
            <Carousel wrap={true} flex='grow' pad='medium' controls='arrows'>
                {experience.map((e, i) => {
                    return (
                        <Box key={i}>
                            <ExperienceCard curExp={e}/> 
                        </Box>
                    );
                })}
            </Carousel>
        </Box>
    );
}
