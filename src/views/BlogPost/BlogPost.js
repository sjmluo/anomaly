import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
    Content,
    Hero,
} from './components';

const BlogArticle = ({ data }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <Main colorInvert={true}>
            <Box>
                <Hero data={data}/>
                <Container>
                    <Grid container spacing={4}>
                        <Content data={data}/>
                    </Grid>
                </Container>
                <Box
                    component={'svg'}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                        marginBottom: -1,
                        width: 1,
                    }}
                >
                    <path
                        fill={theme.palette.alternate.main}
                        d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    />
                </Box>
            </Box>
        </Main>
    );
};

export default BlogArticle;
