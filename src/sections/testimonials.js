import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from '../components/block-title';
import TestimonialsCard from '../components/cards/testimonial-card';
import testimonialsImage1 from '../assets/testimonial-1-1.png';
import testimonialsImage2 from '../assets/testimonial-1-2.png';
import testimonialsImage3 from '../assets/testimonial-1-3.png';
import testimonialsImage4 from '../assets/testimonial-1-4.png';
import testimonialsImage5 from '../assets/testimonial-1-5.png';
import testimonialsImage6 from '../assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "Je suis absolument ravi du site web créé par cette agence. Ils ont parfaitement compris mes besoins et les ont transformés en un site élégant, fonctionnel et facile à utiliser. Je recommande vivement cette agence à tous ceux qui cherchent à améliorer leur présence en ligne.", username: "@julieL", name: "Julie Laurent"
    },
    {
      image: testimonialsImage2,
      text: "J'ai été impressionné par le niveau de professionnalisme et d'expertise de cette agence. Ils ont travaillé sans relâche pour m'aider à lancer mon site web et je suis plus que satisfait du résultat final. Je les recommande sans réserve!", username: "@paulD", name: "Paul Dubois"
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Ma boutique en ligne a connu une augmentation significative des ventes depuis que j'ai fait appel à cette agence pour la refondre. Leur équipe a travaillé sans relâche pour me donner un site web moderne, attrayant et facile à utiliser. Merci beaucoup!", username: "@claireB", name: "Claire Bertrand"
    },
    {
      image: testimonialsImage4,
      text: "Je suis très content de la qualité de travail de cette agence. Ils ont réussi à capturer l'essence de ma marque dans le site web qu'ils ont créé pour moi. Je recommande vivement cette agence à tous ceux qui cherchent à se démarquer en ligne.", username: "@antoineR", name: "Antoine Rousseau"
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "J'ai été très satisfait de la collaboration avec cette agence pour la création de mon site web. Ils étaient très attentifs à mes besoins et m'ont donné un site web élégant et fonctionnel en retour. Je recommande vivement!", username: "@marieT", name: "Marie Tremblay"
    },
    {
      image: testimonialsImage6,
      text: "L'agence a su répondre à toutes mes attentes pour la création de mon site web. Leur équipe était toujours disponible pour répondre à mes questions et m'aider à faire les bons choix pour mon site. Je suis plus que satisfait du résultat final!", username: "@kevinB", name: "Kevin Bellier"
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "J'ai fait appel à cette agence pour créer un site web pour mon entreprise et je suis vraiment heureux du résultat. Ils ont su intégrer mes idées et les ont transformées en un site web professionnel et performant. Merci!", username: "@chloeG", name: "Chloe Gérard"
    },
    {
      image: testimonialsImage2,
      text: "Je suis très satisfait de la qualité de travail fournie par cette agence pour la création de mon site web. Ils ont su traduire mes idées en un site web qui reflète parfaitement mes objectifs et mes attentes. Je recommande fortement cette agence pour tout projet de création de site web.", username: "@romainP", name: "Romain Perrin"
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "L'équipe de cette agence a su comprendre mes besoins et les a traduits de manière parfaite dans le site web qu'ils ont créé pour moi. Je suis très heureux du résultat final et je recommande cette agence à tous ceux qui cherchent à améliorer leur présence en ligne.", username: "@alineJ", name: "Aline Jacquet"
    },
    {
      image: testimonialsImage4,
      text: "L'agence a créé un site web pour moi qui dépasse mes attentes. Leur attention aux détails et leur engagement envers leur travail se reflètent dans le résultat final. Je suis très heureux de travailler avec eux et je recommande cette agence à tous.", username: "@florenceD", name: "Florence Dupont"
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Cette agence m'a donné un site web qui est à la fois attrayant et fonctionnel. Leur équipe a été très professionnelle et a travaillé sans relâche pour m'aider à obtenir le site web de mes rêves. Je les recommande fortement!", username: "@marcO", name: "Marc Olivier"
    },
    {
      image: testimonialsImage6,
      text: "J'ai été ravi de la collaboration avec cette agence pour la création de mon site web. Leur équipe a su traduire mes idées en un site web performant et attrayant. Je suis plus que satisfait du résultat final et je recommande cette agence à tous ceux qui cherchent une agence fiable et compétente.", username: "@sophieR", name: "Sophie Renault"
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="Ce que les clients pensent de nous."
        text=""
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
