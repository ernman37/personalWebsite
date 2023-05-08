import { Box, Heading, Text } from 'grommet';

export default function NotFound(){
    return(
        <Box width='100vw' height='84vh'>
            <Heading alignSelf='center'>
                Page Not Found
            </Heading>
            <Text alignSelf='center' textAlign='center'>
                Whoops! Not sure how you got here
            </Text>
            <Text alignSelf='center' textAlign='center'>
                Return to Website using Navigation Bar
            </Text>
        </Box>
    );
}