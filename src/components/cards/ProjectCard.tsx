import Project from '../../models/Project';
import { Box, Card, CardBody, CardFooter, CardHeader, Text, List } from 'grommet';

type ProjectCardProps = {
    curProj: Project 
};

export default function ProjectCard({curProj}: ProjectCardProps){

    return (
        <Card alignSelf='center' flex='grow' width='60vw' overflow='auto' height='35vh'>
            <CardHeader pad='small' background='dark-2'>
                <Box width='100%'>
                    <Text size='large' alignSelf='center' textAlign='center'>
                        {curProj.title}
                    </Text>
                </Box>
            </CardHeader>
            <CardBody background='light-3' height='20vh' overflow='auto'>
                <Box pad='small'>
                    <Text margin='xxsmall'>
                        {curProj.description}
                    </Text>
                    <List data={curProj.languages}/>
                </Box>
            </CardBody>
            <CardFooter pad='xsmall' background='dark-2'>
                <Text size='small' margin='xxsmall'>
                    {curProj.type}
                </Text>
            </CardFooter>
        </Card>
    );

}