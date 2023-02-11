import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from '../components/block-title';
import ServiceCard from '../components/cards/service-card';
import serviceImage1 from '../assets/service-1.png';
import serviceImage2 from '../assets/service-2.png';
import serviceImage3 from '../assets/service-3.png';
import serviceImage4 from '../assets/service-4.png';
import serviceImage5 from '../assets/service-5.png';
import serviceImage6 from '../assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Notre agence offre des services de création de sites web sur mesure pour répondre aux besoins uniques de chaque client.',
    heading: 'Création de sites web',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Nous aidons les clients à améliorer la visibilité de leur site web sur les moteurs de recherche en utilisant les meilleures pratiques de SEO.',
    heading: 'Optimisation pour les moteurs de recherche (SEO)',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      "Nous concevons des cartes de visite pour les entreprises, avec une attention particulière au design et à l'identité visuelle de chaque client.",
    heading: 'Design de cartes de visite',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      "Nous offrons des services de création d'identité visuelle pour les entreprises, y compris la conception de logos, de chartes graphiques et de supports de communication.",
    heading: 'Identité visuelle',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Nous offrons des services de développement web pour les sites web sur mesure, y compris la création de sites web dynamiques, la mise en place de systèmes de gestion de contenu et la mise en place de solutions e-commerce.',
    heading: 'Développement web',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Nous fournissons une assistance technique et un support continu pour aider nos clients à tirer le meilleur parti de leur site web et de nos autres services.',
    heading: 'Assistance technique et support',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Les services que WebDigital France vous proposent"
          text="Transformons votre vision en réalité, mettons en œuvre vos idées audacieuses pour atteindre vos objectifs."
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
