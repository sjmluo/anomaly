import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardBox } from './Components';

import {
  gvio,
  lazzizi,
  malamdari,
  mlin,
  pcheema,
  sluo,
  twang,
  ychin,
} from '/src/images/people';

const data = [
  {
    name: 'Simon Luo',
    image: sluo,
    role: 'Project Lead',
    about:
      'Simon holds a Bachelors of Aeronautical Engineering, Bachelor of Science (Computer Science) and a PhD in Machine Learning from The University of Sydney. His research interest is primarily focused in machine learning, cyber security, human-computer interactions, robotics and aerospace engineering. Simon aims to use his expertise in machine learning to design novel approaches for anomaly detections particularly in applications for cyber security and signal processing.',
  },
  {
    name: 'Lamiae Azzizi',
    image: lazzizi,
    role: 'Project Personnel / Technical Lead',
    about:
      'Dr Lamiae Azizi received a PhD in Applied Mathematics from Joseph Fourier University (France) and the French National in December 2011 and the French national research institute for the digital sciences (INRIA). She is a Senior Lecturer at the School of Mathematics and Statistics and the Deputy Champion for the Sydney Nano Grand challenge: "Computational Materials Discovery". Before joining the University of Sydney, she held the position of senior statistician at the MRC-University of Cambridge (UK). Her research focuses on solving physical world problems and complex systems with Probabilistic Machine Learning/Artificial Intelligence.',
  },
  {
    name: 'Prasad Cheema',
    image: pcheema,
    role: 'Project Personnel / Technical Lead',
    about:
      'Dr Prasad Cheema holds a bachelor in Computer Science, and a bachelor in Aeronautical (Space) Engineering. Furthermore, he has obtained a PhD in the applications of machine learning for civil and aerospace structural systems from The University of Sydney, with a particular focus on developing technologies for anomaly detection in sensor arrays. Dr Prasad Cheema consistently aims to push for development in the space of novel uses of machine learning technologies for sensor array technologies as he believes this will help shape the future for the benefit of humanity. ',
  },
  {
    name: 'Gareth Vio',
    image: gvio,
    role: 'Technical Advisor',
    about:
      'Dr Gareth A. Vio received his bachelor\'s degree in aerospace engineering, and PhD degree in aeronautical engineering from The University of Manchester in 1999 and 2005 respectively. He is currently a Senior Lecturer with the School of Aerospace, Mechanical and Mechatronic Engineering at The University of Sydney. His research interests include multidisciplinary design and topology optimisation, shock wave/boundary layer interaction, nonlinear structural dynamics and energy harvesting.',
  },
  {
    name: 'Mehrisadat Makki Alamdari',
    image: malamdari,
    role: 'Technical Advisor',
    about:
      'Dr. Makki Alamdari is a Senior Lecturer in the UNSW, School of Civil and Environmental Engineering. She is the recipient of the highly competitive ARC Discovery Early Career Research Award (DECRA). Dr. Alamdari is also the winner of the prestigious JSPS Award (Japan Society for Promotion of Science). An award-winning scholar, Mehri is on the Executive of the Australian Network of Structural Health Monitoring (ANSHM), a member of The International Society for Structural Health Monitoring of Intelligent Infrastructure (ISHMII) and a steering committee member in the Australia, New Zealand and Oceania Researchers in Japan Network (ANZOR Japan Network). Prior to joining UNSW, she was a research fellow in Data61|CSIRO (since 2015) working on structural health monitoring of the iconic Sydney Harbour Bridge. Dr. Alamdari\'s expertise is structural health monitoring, vibration analysis and testing, inverse dynamic problems and signal processing. ',
  },
  {
    name: 'Tony Wang',
    image: twang,
    role: 'Engineering Lead',
    about:
      'Currently studying for the Masters of Mathematics at the University of New South Wales after previously attaining First Class Honours in Pure Mathematics at the University of Sydney, Tony is a researcher of many interests, having completed numerous projects in theoretical mathematics. Now bringing his work to the applied and statistical fields, Tony hopes to leverage his unique perspectives to bear on the challenging issue of detecting contextually-situated anomalies, a problem that conventional machine learning algorithms and statistical analyses struggle on with no clear solution available.',
  },
  {
    name: 'Yee Chin',
    image: ychin,
    role: 'Engineering Lead',
    about:
      'Yee is a pure mathematics graduate currently working in the actuarial and analytics space. Through this project, she hopes to leverage her supervisors’ subject matter expertise in engineering to broadly understand typical means of processing time series informed by context and practicality, rather than pure theory. She would like to use her understanding of the mathematical mechanisms underlying specific processing methods to tweak processes to be more applicable and robust in practice. She also wishes to brainstorm ways in which existing novel time series models could be used detect anomalous behaviour in time series.',
  },
  {
    name: 'Michael Lin',
    image: mlin,
    role: 'Engineering Lead',
    about:
      'Michael holds a Bachelor of Science (Advanced Mathematics) and Bachelor of Advanced Studies (Data Science Honours) from the University of Sydney and currently works in the analytics space. He has explored various research fields in machine learning including computer vision, machine learning applications in bioinformatics, and anomaly detection. He is currently interested in machine learning and applying his research in both academic and industry environments.',
  },
];

const Team = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <CardBox data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
