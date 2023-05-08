import Class from '../../models/Class';
import { Box, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet';

type CardClassProps = {
    curClass: Class
};

export default function ClassCard({curClass}: CardClassProps){


    return (
        <Card alignSelf='center' flex='grow' width='60vw'>
            <CardHeader pad='small' background='dark-2'>
                <Box width='100%'>
                    <Text size='large' alignSelf='center' textAlign='center'>
                        {curClass.title}
                    </Text>
                </Box>
            </CardHeader>
            <CardBody background='light-3'>
                <Box pad='small'>
                    <Text margin='xxsmall'>
                       {curClass.department + " " + curClass.num}
                    </Text>
                    <Text margin='xxsmall'>
                        Grade: {curClass.grade}
                    </Text>
                </Box>
            </CardBody>
            <CardFooter pad='xsmall' background='dark-2'>
                <Text size='small' margin='xxsmall'>
                    {curClass.school + " " + curClass.term + " " + curClass.year}
                </Text>
            </CardFooter>
        </Card>
    );

}