import Experience from '../../models/Experience';
import { Box, Card, CardBody, CardFooter, CardHeader, Text, List } from 'grommet';

type ExperienceCardProps = {
    curExp: Experience 
};

export default function ExperienceCard({curExp}: ExperienceCardProps){

    return (
        <Card alignSelf='center' flex='grow' width='60vw' overflow='auto' height='35vh'>
            <CardHeader pad='small' background='dark-2'>
                <Box width='100%'>
                    <Text size='large' alignSelf='center' textAlign='center'>
                        {curExp.title}
                    </Text>
                </Box>
            </CardHeader>
            <CardBody background='light-3' height='20vh' overflow='auto'>
                <Box pad='small'>
                    <Text margin='xxsmall'>
                        {curExp.time}
                    </Text>
                    <Text margin='xxsmall'>
                        {curExp.description}
                    </Text>
                    <List data={curExp.languages}/>
                </Box>
            </CardBody>
            <CardFooter pad='xsmall' background='dark-2'>
                <Text size='small' margin='xxsmall'>
                    {curExp.company}
                </Text>
            </CardFooter>
        </Card>
    );

}