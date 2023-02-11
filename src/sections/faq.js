import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from '../components/link';
import BlockTitle from '../components/block-title';
import Accordion from '../components/accordion/accordion';

const accordionData = [
  {
    isExpanded: true,
    title: 'Quels sont les services que votre agence propose pour la création de site web?',
    contents: (
      <div>
        Nous proposons une gamme complète de services pour la création de sites web, y compris la conception de sites web personnalisés, le développement de sites web sur mesure, l'optimisation pour les moteurs de recherche, le développement de boutiques en ligne, etc.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Combien coûte votre service de création de site web?',
    contents: (
      <div>
        Le coût de nos services dépend du projet spécifique que vous avez en tête. Nous proposons des tarifs abordables et transparents pour répondre à vos besoins et à votre budget. N'hésitez pas à nous contacter pour discuter de vos besoins et obtenir un devis.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Pouvez-vous me montrer des exemples de sites web que vous avez créés pour d'autres clients?",
    contents: (
      <div>
         Bien sûr! Nous serions ravis de vous montrer nos références et des exemples de nos travaux précédents. Visitez notre site web pour en savoir plus sur nos réalisations.
      </div>
    ),
  },

  {
    isExpanded: false,
    title: 'Pouvez-vous me garantir un site web optimisé pour les moteurs de recherche?',
    contents: (
      <div>
        Oui, nous nous efforçons de créer des sites web qui sont optimisés pour les moteurs de recherche, ce qui aide à améliorer leur visibilité en ligne. Nous utilisons les meilleures pratiques SEO pour garantir des résultats durables et un bon classement dans les résultats de recherche.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Questions fréquemment posées"
          text=""
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
