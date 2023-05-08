/*
 *    File: ProjectPage.tsx
 *    Creator: Ernest M Duckworth IV
 *    Created: Sunday May 07 2023 at 05:32:29 PM
 *    For: Personal Website
 *    Description: Page display for Projects that I have been apart of and a little bit of detail
*/
import { Box, Heading, Paragraph, Carousel } from "grommet";
import { useState, useEffect } from 'react';
import Project from '../models/Project';
import { ProjectApi } from '../apis/ProjectApi'
import ProjectCard from '../components/cards/ProjectCard';

export default function ProjectsPage(){
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const loadedProjects = await ProjectApi.getProjects();
            setProjects(loadedProjects);
        };
        fetchProjects();
    }, []);

    return(
        <Box height="84vh" width='100vw' overflow="auto">
            <Box width='80vw' alignSelf='center' flex='grow'>
                <Heading alignSelf='center'>
                    Projects
                </Heading>
                <Box alignSelf='center' flex='grow'>
                    <Paragraph textAlign='center'>
                        Ever since I started programming I enjoyed building little personal projects and once I got into my later years at CSU I have had the chance to work on some interesting group projects.
                    </Paragraph>
                </Box>
            </Box>
            <Heading alignSelf='center'>
                Personal Projects 
            </Heading>
            <Carousel wrap={true} flex='grow' pad='medium' controls='arrows'>
                {projects.filter(p => p.type === 'personal').map((p, i) => {
                    return (
                        <Box key={i}>
                            <ProjectCard curProj={p}/> 
                        </Box>
                    );
                })}
            </Carousel>
            <Heading alignSelf='center'>
                Group Projects
            </Heading>
            <Carousel wrap={true} flex='grow' pad='medium' controls='arrows'>
                {projects.filter(p => p.type === 'group').map((p, i) => {
                    return (
                        <Box key={i}>
                            <ProjectCard curProj={p}/> 
                        </Box>
                    );
                })}
            </Carousel>
        </Box>
    );
}
