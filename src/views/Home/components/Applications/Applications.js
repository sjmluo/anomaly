/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import aircraft from '/src/images/aircraft.svg';
import bridge from '/src/images/bridge.svg';
import building from '/src/images/building.svg';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css';

const data = [
  {
    application: 'Aircraft',
    image: aircraft,
    description:
      'Aircraft often have difficulty being analyzed in the structural health monitoring field due to the large degree of false positives that can arise throughout standard operation. This is because aircraft undergo multiple, different flight phases (i.e. various context shifts), which makes it challenging to differentiate between time signal changes that have occurred either due to a change in flight pattern, or from actual damage.',
  },
  {
    application: 'Building',
    image: building,
    description:
      'It is common for buildings to be continually analyzed for the purpose of structural health monitoring. Typically vast sensor arrays of different kinds can be found throughout a building due to this. However, the main difficulty with buildings is the steady accrual of damage over time, which makes it hard to know when to trigger an alarm.',
  },
  {
    application: 'Bridge',
    image: bridge,
    description:
      'Bridges are subject to various forms of stresses on a daily basis, whether it be environmental (wind, rain, hail, changing temperature), pedestrian (walking, jumping, running), as well as dynamic, load-bearing tasks (trains, trucks, cars). As such, they represent a form of contextually-situated anomaly detection problem which necessitates careful phase-shift analysis, that also experiences co-variate shifting problems, whilst experiencing seasonal changes in load-bearing potential.',
  },
];

const Applications = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(data[0]);

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={theme.palette.alternate.main}
      maxWidth={700}
      margin="auto"
      // data-aos={'fade-up'}
    >
      <Typography
        variant="h4"
        gutterBottom
        align={'center'}
        marginTop={4}
        sx={{
          fontWeight: 900,
        }}
      >
        Applications
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'center'}
        marginTop={8}
      >
        <div className="window">
          <nav>
            <ul>
              {data.map((item) => (
                <Box
                  key={item.application}
                  margin={1}
                  sx={{ border: 1, borderRadius: 16 }}
                >
                  <li
                    className={item === selectedTab ? 'selected' : ''}
                    onClick={() => setSelectedTab(item)}
                  >
                    <Box component="img" src={item.image} height={'40px'} />
                    {`${item.application}`}
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                </Box>
              ))}
            </ul>
          </nav>
          <Box marginTop={4} />
          <main>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.application : 'empty'}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {selectedTab ? selectedTab.description : '😋'}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </Box>
    </Box>
  );
};

export default Applications;
