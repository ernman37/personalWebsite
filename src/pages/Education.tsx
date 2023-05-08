/*
 *    File: Education.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Sunday May 07 2023 at 05:32:34 PM
 *    For: 
 *    Description:
*/
import { Box, Heading, Paragraph, Carousel } from "grommet";
import {AppHeader} from "../components/AppHeader";
import { ClassApi } from "../apis/ClassApi";
import { useState, useEffect } from "react";
import  ClassCard  from "../components/cards/ClassCard";

export default function Education(){
    const [classes, setClasses] = useState<Class[]>([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const dbClasses = await ClassApi.getClasses();
            const sortedClasses = dbClasses.sort((c1,c2) => {
                if(c1.year as int > c2.year as int){
                    return -1;
                }else if((c1.year as int) < (c2.year as int)){
                    return 1;
                }else if(c1.term === 'Fall' && c2.term === 'Spring'){
                    return -1;
                }else if(c1.term === 'Spring' && c2.term === 'Fall'){
                    return 1;
                }
                return 0;
            });
            setClasses(sortedClasses);
        };
        fetchClasses();
    }, []);

    return(
        <Box height="84vh" width='100vw' overflow="auto">
            <Box width='80vw' alignSelf='center'>
                <Heading alignSelf='center'>
                    Education
                </Heading>
                <Box alignSelf='center' flex='grow'>
                    <Paragraph textAlign='center'>
                        Currently I am attending Colorado State University. I have been lucky enough to able to be apart of two research studies with a focus on Blockchains and Website Development.
                    </Paragraph>
                    <Paragraph textAlign='center'>
                        I have been interested in Computer Science since I was in Highschool where I began taking courses at Arapahoe Community College.
                    </Paragraph>
                </Box>
                <Heading alignSelf='center'>
                    CS Course History
                </Heading>
                <Carousel wrap={true} flex='grow' pad='medium' controls='arrows'>
                    {classes.filter((c) => ['Computer Science', 'Data Science', 'Computer Information Systems'].includes(c.department)).map((c, i) => {
                        return (
                            <Box key={i}>
                                <ClassCard curClass={c}/> 
                            </Box>
                        );
                    })}
                </Carousel>
                <Heading alignSelf='center'>
                    All Course History
                </Heading>
                <Carousel wrap={true} flex='grow' pad='medium' controls='arrows'>
                    {classes.map((c, i) => {
                        return (
                            <Box key={i}>
                                <ClassCard curClass={c}/> 
                            </Box>
                        );
                    })}
                </Carousel>
            </Box>
        </Box>
    );
}
