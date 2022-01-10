import React, {useEffect} from 'react';
import {CardContainer, ContentContainer, HeaderContainer, MainContainer, TabContainer} from './elements';
import {Avatar, Card, Divider, List, Tabs, Tag, Typography} from 'antd';
import moment from 'moment';
import {dateFormat, maxDesktopWidth} from './constants';
import useWindowDimensions from './hooks/use-window-dimensions';

const {Title, Text} = Typography;

const education = [
  {
    title: 'Education',
    activities: [
      {
        title: 'Computer Science - Tec de Monterrey',
        color: '#0157A8',
        logo: 'tec-logo.png',
        dates: [new Date('08/10/2018'), new Date('05/20/2023')],
        description:
          <List header={undefined} footer={undefined} bordered size="small">
            <List.Item>GPA: 94</List.Item>
            <List.Item>AEJAL chairman - Organizing and managing events for students.</List.Item>
          </List>,
      },
    ],
  },
  {
    title: 'Skills and interests',
    activities: [
      {
        title: 'Hard skills',
        color: '#0157A8',
        logo: 'tec-logo.png',
        description: 'Full-stack development, system design and architecture, databases, and machine learning.',
      },
      {
        title: 'Soft skills',
        color: '#0157A8',
        logo: 'tec-logo.png',
        description: 'Critical thinking, listening, verbal communication, strong writing skills.',
      },
      {
        title: 'Interests',
        color: '#0157A8',
        logo: 'tec-logo.png',
        description: 'Algorithmic trading, finances, stock market.',
      },
    ],
  },
  {
    title: 'International experiences',
    activities: [
      {
        title: 'Berlin summer - Tec de Monterrey',
        color: '#0157A8',
        logo: 'tec-logo.png',
        dates: [new Date('06/01/2016'), new Date('07/01/2016')],
        description: 'Cultural trip over the summer in Germany.',
      },
      {
        title: 'Cambridge semester - Tec de Monterrey',
        color: '#0157A8',
        logo: 'tec-logo.png',
        dates: [new Date('08/10/2017'), new Date('12/10/2017')],
        description: 'Cultural trip during fall semester in United Kingdom.',
      },
    ],
  },
];

const experiences = [
  {
    title: 'Startups',
    activities: [
      {
        title: 'Dropin - Founder Engineer',
        color: '#52B266',
        logo: 'dropin-logo.svg',
        dates: [new Date('10/01/2021'), new Date()],
        description: 'Logistics integration as a service (LAAS) for digital businesses. Uber-style crowd-sourcing model to distribute packages nationwide.',
      },
    ],
  },
  {
    title: 'Internships',
    activities: [
      {
        title: 'Lyft - Rentals Team',
        color: '#FF00BF',
        logo: 'lyft-logo.png',
        dates: [new Date('01/10/2022'), new Date('03/16/2022')],
        description: 'TBD',
      },
      {
        title: 'Google - Search Team',
        color: '#4C8BF5',
        logo: 'google-logo.png',
        dates: [new Date('08/29/2021'), new Date('12/10/2021')],
        description: 'Search infrastructure team. Migrated legacy infrastructure for answer boxes within Chrome to a new proposed approach to improve response resolution and dynamic Search Page Response granularity generation.',
      },
      {
        title: 'Lyft - Rentals Team',
        color: '#FF00BF',
        logo: 'lyft-logo.png',
        dates: [new Date('06/12/2021'), new Date('08/21/2021')],
        description: 'Built infrastructure to enable reactive marketing campaigns based on user actions/events inside Lyft’s rentals  application. The goal was to improve user experience by offering personalized and relevant promotions on a  per-user basis based on heuristics established to understand user behavior and goals.',
      },
      {
        title: 'Google - Google Cloud Platform',
        color: '#4C8BF5',
        logo: 'google-logo.png',
        dates: [new Date('06/12/2021'), new Date('08/21/2021')],
        description: 'Built a search engine to look through road-regulations documents. The app was built with a micro-services-oriented architecture using Docker and Google Kubernetes Engine. Mainly focused on setting up a PWA using React and a Nodejs backend to integrate external services and process user requests.',
      },
      {
        divider: <Divider key={Math.random()} orientation='right'>Firmados para 2022</Divider>,
      },
      {
        title: 'MongoDB - TBD',
        color: '#589636',
        logo: 'mongodb-logo.png',
        dates: [new Date('06/15/2022'), new Date('08/29/2022')],
        description: 'TBD',
      },
      {
        title: 'Datadog - TBD',
        color: '#774AA4',
        logo: 'datadog-logo.png',
        dates: [new Date('09/06/2022'), new Date('12/10/2022')],
        description: 'TBD',
      },
      {
        title: 'Google - TBD',
        color: '#4C8BF5',
        logo: 'google-logo.png',
        dates: [new Date('01/10/2023'), new Date('03/15/2023')],
        description: 'TBD',
      },
    ],
  },
];

const recognitions = [
  {
    title: 'Hackathones',
    activities: [
      {
        title: '1st place overall - Virginia University',
        link: 'https://devpost.com/software/ruby-lo2p7g',
        dates: [new Date('09/15/2020'), new Date('09/17/2020')],
        description: 'Developed a personal visual evaluator that takes care of your posture during training sessions.',
      },
      {
        title: '1st place HackMTY Banorte Challenge - Tec de Monterrey',
        link: 'https://devpost.com/software/smart-sign-tikd3z',
        dates: [new Date('09/25/2020'), new Date('09/26/2020')],
        description: 'Developed a decentralized system to sign documents between different stakeholders over the Ethereum  Blockchain using Smart Contracts. Created a Microservices architecture using GCP and Docker containers.',
      },
      {
        title: 'Top 5 finalists HackTX - UT Austin',
        link: undefined,
        dates: [new Date('09/25/2020'), new Date('09/26/2020')],
        description: 'Built an app to suggest the best tree type to plant depending on the soil. Trained a machine learning model with Azure’s Custom Computer Vision API to recognize soil types with pictures and built an entire web app using a MERN stack with a GraphQL layer to support high-performance query processing and a MongoDB database on the cloud to persist data.',
      },
      {
        title: 'Top 10 overall HackMTY - Tec de Monterrey',
        link: undefined,
        dates: [new Date('09/25/2020'), new Date('09/26/2020')],
        description: 'Built a web crawler chrome extension to fetch all links from any mail service, test them against malware, and disable them if necessary. The goal was to verify a link before accessing it.',
      },
    ],
  },
];

/**
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const [width] = useWindowDimensions();

  useEffect(() => {
    const interval = setInterval(() => {
      const bouncingBall = document.getElementById('bouncing-ball');
      const nextX = Math.floor((Math.random()) * (120 - 1 + 1)) + 1;
      const nextY = Math.sqrt(Math.pow(nextX, 3) + 7); // y ^ 2 = x ^ 3 + 7 ... Ethereum's elliptic curve function.
      bouncingBall.style.backgroundColor = 'red';
      bouncingBall.style.top = `${nextX}px`;
      bouncingBall.style.left = `${nextY}px`;
    }, 14_000); // Current time to mine an Ethereum block.
    return () => clearInterval(interval);
  }, []);


  return (
    <MainContainer>
      <ContentContainer>
        <HeaderContainer>
          <Avatar
            size={150}
            style={{display: width < maxDesktopWidth ? 'none' : 'block'}}
            src='profile-picture.jpg'
          />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
            <Title level={3}>Oscar D. Rodríguez Moscosa</Title>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/odrm/">
              <img
                src="https://img.shields.io/badge/-Oscar%20Rodríguez-0077B5?style=flat&logo=Linkedin&logoColor=white"/>
            </a>
            <a href="mailto:osdavrm@gmail.com">
              <img src="https://img.shields.io/badge/-osdavrm@gmail.com-D14836?style=flat&logo=Gmail&logoColor=white"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/osdrm/">
              <img src="https://img.shields.io/badge/-@osdrm-E4405F?style=flat&logo=Instagram&logoColor=white"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/osdavrm/">
              <img src="https://img.shields.io/badge/-@osdavrm-1877F2?style=flat&logo=Facebook&logoColor=white"/>
            </a>
          </div>
        </HeaderContainer>
        <Tabs
          defaultActiveKey="academic-experience"
          tabPosition={width < maxDesktopWidth ? 'top' : 'left'}
          type="card"
          size="small"
        >
          <TabContainer tab="Educación" key="academic-experience">
            {education.map((education, i) => {
              return (
                <CardContainer
                  width={width}
                  title={education.title}
                  headStyle={{backgroundColor: '#F0F0F0'}}
                  key={i}
                >
                  {education.activities.map((activity, j) => {
                    if (activity?.divider) return activity?.divider;
                    let from;
                    let to;

                    if (activity?.dates) {
                      from = moment(activity?.dates[0]).format(dateFormat);
                      to = moment(activity?.dates[1]).format(dateFormat);
                    }

                    return (
                      <Card
                        style={{marginBottom: '10px'}}
                        headStyle={{color: 'white', backgroundColor: activity.color}}
                        type="inner"
                        size="small"
                        title={activity.title}
                        key={j}
                        extra={(width > maxDesktopWidth) && activity?.dates ?
                          <Text><Tag>{`${from} - ${to}`}</Tag></Text> : undefined}
                      >
                        {activity.description}
                      </Card>
                    );
                  })}
                </CardContainer>
              );
            })}
          </TabContainer>
          <TabContainer tab="Experiencia" key="work-experience">
            {experiences.map((experience, i) => {
              return (
                <CardContainer
                  width={width}
                  title={experience.title}
                  headStyle={{backgroundColor: '#F0F0F0'}}
                  key={i}
                >
                  {experience.activities.map((activity, j) => {
                    if (activity?.divider) return activity?.divider;

                    let from;
                    let to;
                    if (activity?.dates) {
                      from = moment(activity?.dates[0]).format(dateFormat);
                      to = moment(activity?.dates[1]).format(dateFormat);
                    }

                    return (
                      <Card
                        style={{marginBottom: '10px'}}
                        headStyle={{color: 'white', backgroundColor: activity.color}}
                        type="inner"
                        size="small"
                        title={activity.title}
                        key={j}
                        extra={(width > maxDesktopWidth) && activity?.dates ?
                          <Text><Tag>{`${from} - ${to}`}</Tag></Text> : undefined}
                      >
                        {activity.description}
                      </Card>
                    );
                  })}
                </CardContainer>
              );
            })}
          </TabContainer>
          <TabContainer tab="Actividades" key="activities">
            {recognitions.map((recognition, i) => {
              return (
                <CardContainer
                  width={width}
                  title={recognition.title}
                  headStyle={{backgroundColor: '#F0F0F0'}}
                  key={i}
                >
                  {recognition.activities.map((activity, j) => {
                    let from;
                    let to;
                    if (activity?.dates) {
                      from = moment(activity?.dates[0]).format(dateFormat);
                      to = moment(activity?.dates[1]).format(dateFormat);
                    }

                    return (
                      <Card
                        style={{marginBottom: '10px'}}
                        headStyle={{backgroundColor: activity.color}}
                        type="inner"
                        size="small"
                        title={activity?.link ?
                          <a target="_blank" rel="noopener noreferrer" href={activity.link}>{activity.title}</a> :
                          activity.title
                        }
                        key={j}
                        extra={(width > maxDesktopWidth) && activity?.dates ?
                          <Text><Tag>{`${from} - ${to}`}</Tag></Text> : undefined}
                      >
                        {activity.description}
                      </Card>
                    );
                  })}
                </CardContainer>
              );
            })}
          </TabContainer>
        </Tabs>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
