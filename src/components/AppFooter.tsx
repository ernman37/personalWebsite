import { Footer, Box, Anchor } from 'grommet';
import {
    Grommet as GrommetIcon,
    Linkedin,
    Github,
    Twitter,
  } from 'grommet-icons';

export function AppFooter(){
    return (
        <Footer align='center' background='light-3' height="6vh" overflow='hidden'>
            <Box align='center'/>
            <Box align='center' direction="row">
                <Anchor
                    href="https://github.com/ernman37"
                    icon={<Github size='medium' color="brand" />}
                />
                <Anchor
                    a11yTitle="Chat with us on Slack"
                    href="https://www.linkedin.com/in/ernest-duckworth-iv-4683041a4/"
                    icon={<Linkedin size='medium' color="brand" />}
                />
            </Box>
            <Box align='center'/>
        </Footer>
    );
}