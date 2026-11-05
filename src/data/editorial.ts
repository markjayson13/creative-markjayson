import { withBase } from "../utils/paths";

export type CreativeFeatureCard = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

export type CreativeMeasure = {
  label: string;
  value: string;
};

export type CreativeResumeEntry = {
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
};

export type CreativeResumeSection = {
  id: string;
  label: string;
  intro: string;
  entries: CreativeResumeEntry[];
};

export type CreativeGalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  featured?: boolean;
  aspect?: "portrait" | "landscape";
};

export type CreativeGalleryGroup = {
  id: string;
  label: string;
  intro: string;
  items: CreativeGalleryItem[];
};

export type CreativePageTheme = {
  page: "creative-landing" | "creative-artistic-resume" | "creative-headshots" | "creative-photoshoots";
  accent: string;
  mode: "light" | "dark";
};

export const replicaFooterCredit = "© Mark Jayson Martinez Farol";

const creativeHeadshotSelections = [
  {
    src: withBase("/images/creative/headshots/mark-jayson-farol-headshot-office-seated.jpg"),
    alt: "Mark Jayson Farol seated at an office desk in a dark suit and glasses",
    width: 1600,
    height: 2400,
    caption: "Cinematic portrait",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/mark-jayson-farol-headshot-studio-suit.jpg"),
    alt: "Studio headshot of Mark Jayson Farol in a dark suit and tie on a white background",
    width: 1024,
    height: 1536,
    caption: "Studio headshot",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/mark-jayson-farol-headshot-angled-glasses.jpg"),
    alt: "Angled headshot of Mark Jayson Farol in glasses, a dark blazer, and a gray tie",
    width: 1600,
    height: 2400,
    caption: "Angled portrait study",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeEditorialSelections = [
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-leather-jacket-sunglasses.jpg"),
    alt: "Black-and-white editorial photo of Mark Jayson Farol in sunglasses and a leather jacket",
    width: 1600,
    height: 2400,
    caption: "Black-and-white editorial portrait",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-leather-coat.jpg"),
    alt: "Black-and-white editorial photo of Mark Jayson Farol in a long leather coat and white tank top",
    width: 1600,
    height: 2400,
    caption: "Editorial portrait I",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-tank-top-black-and-white.jpg"),
    alt: "Black-and-white editorial portrait of Mark Jayson Farol in a white tank top",
    width: 1800,
    height: 2400,
    caption: "Editorial portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-rose-shearling-jacket.jpg"),
    alt: "Editorial portrait of Mark Jayson Farol holding a rose in his mouth, wearing a shearling jacket",
    width: 1717,
    height: 2400,
    caption: "Editorial portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-rose-white-backdrop.jpg"),
    alt: "Mark Jayson Farol with a rose in his mouth and a shearling jacket against a white backdrop",
    width: 1800,
    height: 2400,
    caption: "Editorial portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/mark-jayson-farol-editorial-rotary-phone.jpg"),
    alt: "Black-and-white photo of Mark Jayson Farol on a vintage rotary phone at a marble table",
    width: 1800,
    height: 2400,
    caption: "Editorial portrait V",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeCommencementSelections = [
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-cap-las-vegas-sky.jpg"),
    alt: "Mark Jayson Farol in a red graduation cap, seen from behind against the sky above Las Vegas",
    width: 2400,
    height: 1600,
    caption: "Commencement portrait I",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-masters-hood.jpg"),
    alt: "Mark Jayson Farol in a graduation cap, gown, and master's hood on a black background",
    width: 1800,
    height: 2400,
    caption: "Commencement portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-cap-fire.jpg"),
    alt: "Mark Jayson Farol in a graduation cap and hood, lit by flames in the dark",
    width: 2400,
    height: 1800,
    caption: "Commencement portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-red-cap-suit.jpg"),
    alt: "Mark Jayson Farol in a red graduation cap and red suit outdoors",
    width: 1600,
    height: 2400,
    caption: "Commencement portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-red-gown-dog.jpg"),
    alt: "Mark Jayson Farol in a red graduation gown holding his black dog",
    width: 2400,
    height: 2360,
    caption: "Commencement portrait V",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-sword-las-vegas-skyline.jpg"),
    alt: "Mark Jayson Farol in a red graduation gown walking with a sword above the Las Vegas skyline",
    width: 2400,
    height: 1880,
    caption: "Commencement portrait VI",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-glowing-globe.jpg"),
    alt: "Mark Jayson Farol in a graduation gown holding a glowing globe",
    width: 1800,
    height: 2400,
    caption: "Commencement portrait VII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/mark-jayson-farol-graduation-starry-night.jpg"),
    alt: "Mark Jayson Farol in a graduation gown under a starry night sky",
    width: 1344,
    height: 2400,
    caption: "Commencement portrait VIII",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeHalloweenSelections = [
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-clark-kent-superman-costume-library.jpg"),
    alt: "Mark Jayson Farol as Clark Kent opening his shirt to show the Superman logo in a library aisle",
    width: 1600,
    height: 2400,
    caption: "Character portrait I",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-joker-costume-stairs.jpg"),
    alt: "Mark Jayson Farol as the Joker dancing on stairs under a Brooklyn Bowl sign",
    width: 1536,
    height: 2048,
    caption: "Character portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-superman-moon-earth.jpg"),
    alt: "Mark Jayson Farol as Superman sitting on the moon with his dog, watching the sun rise over Earth",
    width: 1290,
    height: 2292,
    caption: "Character portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-voldemort-costume-forest.jpg"),
    alt: "Mark Jayson Farol as Voldemort in a dark forest",
    width: 2388,
    height: 1564,
    caption: "Character portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-voldemort-costume-spell.jpg"),
    alt: "Mark Jayson Farol as Voldemort casting a green spell in a dark forest",
    width: 1404,
    height: 1668,
    caption: "Character portrait V",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-superman-portrait.jpg"),
    alt: "Illustrated-style portrait of Mark Jayson Farol as Superman",
    width: 1161,
    height: 2064,
    caption: "Character portrait VI",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-ken-barbie-poster.jpg"),
    alt: "Mark Jayson Farol as Ken on a Barbie movie-style poster",
    width: 1080,
    height: 1920,
    caption: "Character portrait VII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-ken-costume-barbie-box.jpg"),
    alt: "Mark Jayson Farol dressed as Ken standing in a life-size Barbie box",
    width: 2400,
    height: 2400,
    caption: "Character portrait VIII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/mark-jayson-farol-scarlet-witch-costume.jpg"),
    alt: "Mark Jayson Farol as the Scarlet Witch holding red energy",
    width: 1600,
    height: 2400,
    caption: "Character portrait IX",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

export const creativeCluster = {
  landing: {
    theme: {
      page: "creative-landing",
      accent: "#b69030",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Creative",
    lead: "Music, performance, film, and storytelling across my artistic practice.",
    statement:
      "Arts has been one of my earliest ways of understanding myself and the world around me. I exhibit different forms of arts through music, theatre, film, performance, and visual storytelling, each one shaping how I communicate, create, and connect with people. My artistic practice has strengthened my discipline, emotional range, confidence, and presence, while deepening the human side of how I think and work. Across stage, screen, and sound, I continue to treat art as both expression and exploration. Find out my artistic journey through my performances, music, film, and creative work.",
    measurements: [
      { label: "Height", value: "5'7\"" },
      { label: "Bust", value: "36\"" },
      { label: "Waist", value: "28\"" },
      { label: "Hips", value: "30\"" },
      { label: "Shoes", value: "US 8.5" },
      { label: "Shirt", value: "US S/M" },
      { label: "Hair", value: "Dark Brown" },
      { label: "Eyes", value: "Dark Brown" },
    ] satisfies CreativeMeasure[],
    headshotPreviews: creativeHeadshotSelections.slice(0, 3),
    headshotsCta: {
      label: "View Headshots",
      href: withBase("/headshots"),
    },
    featureCards: [
      {
        title: "Performing Arts",
        description:
          "Stage work across musical theatre, plays, and live showcase performances, with strengths in character work, vocals, movement, and stage presence.",
        href: withBase("/artistic-resume"),
        cta: "Artistic Resume",
      },
      {
        title: "Modeling and Photography",
        description:
          "Editorial, portrait, and character-based visual work focused on camera presence, range, styling, and expressive storytelling.",
        href: withBase("/photoshoots"),
        cta: "Photoshoots",
      },
      {
        title: "Music",
        description:
          "Music practice spanning vocals, songwriting, and performance across pop, musical theatre, and contemporary styles.",
      },
      {
        title: "Film",
        description:
          "On-camera performance and screen-based storytelling centered on character, presence, and emotional clarity.",
      },
    ] satisfies CreativeFeatureCard[],
  },
  artisticResume: {
    theme: {
      page: "creative-artistic-resume",
      accent: "#570100",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Mark Jayson M. Farol",
    sections: [
      {
        id: "summary",
        label: "Summary",
        intro: "Overview",
        entries: [
          {
            title: "Artist statement",
            description:
              "Artist, performer, musician, and storyteller with experience across musical theatre, plays, live performance, and on-camera work. Trained through theatre and performance-based roles that strengthened stage presence, vocal expression, movement, and character work. Brings discipline, emotional range, and strong audience connection across stage and screen.",
          },
        ],
      },
      {
        id: "education",
        label: "Education",
        intro: "Training in performance, stagecraft, and theatre-based communication.",
        entries: [
          {
            title: "University of Nevada, Las Vegas",
            subtitle: "Minor in Theatre",
            description:
              "The Department of Theatre in the College of Fine Arts offers programs in performance, production and technology taught by experienced faculty while taking advantage of the entertainment richness of Las Vegas.",
          },
          {
            title: "Courses",
            subtitle:
              "Acting: Camera · Voice and Movement for Actors I · Voice and Movement for Actors II · Acting I: Techniques · Act Studio II: Technique · Play Structure & Analysis · Acting III: Scene Study · Speech for the Actor · Acting as a Profession",
            description:
              "Coursework across camera acting, movement, text analysis, voice, rehearsal process, and professional preparation.",
          },
        ],
      },
      {
        id: "musical-theatre",
        label: "Musical Theatre",
        intro: "Selected musical theatre roles and training work.",
        entries: [
          {
            title: "Willy Wonka",
            subtitle: "Augustus Gloop",
            meta: "LHS Patriot Theatre",
            description:
              "A whimsical stage musical following the mysterious Willy Wonka and the children invited into his fantastical chocolate factory. Augustus Gloop is bold, indulgent, and larger than life, bringing humor, strong physicality, and exaggerated stage presence to the production.",
          },
          {
            title: "Rock of Ages",
            subtitle: "Ensemble",
            meta: "LHS Patriot Theatre",
            description:
              "A high-energy jukebox musical set on the 1980s Sunset Strip, filled with rock anthems, comedy, and larger-than-life characters chasing fame and connection.",
          },
          {
            title: "The Phantom of the Opera",
            subtitle: "Erik, The Phantom | Viscount Raoul de Chagny",
            meta: "Training and scene work",
            description:
              "A gothic musical set in the Paris Opera House, centered on obsession, genius, longing, and the haunting relationship between Christine Daae and the Phantom.",
          },
          {
            title: "Les Miserables",
            subtitle: "Jean Valjean | Marius Pontmercy",
            meta: "Training and scene work",
            description:
              "An epic musical set in 19th-century France, exploring justice, mercy, sacrifice, and redemption amid social unrest and revolution.",
          },
        ],
      },
      {
        id: "plays",
        label: "Plays",
        intro: "Straight plays and directed work focused on dramatic range and storytelling precision.",
        entries: [
          {
            title: "The Curious Incident of the Dog in the Night-time",
            subtitle: "Christopher (Understudy) | Ensemble",
            meta: "LHS Patriot Theatre",
            description:
              "A stage adaptation following a mathematically gifted teenager as he investigates the death of a neighbor's dog and navigates a world that often feels overwhelming and unpredictable.",
          },
          {
            title: "Radium Girls",
            subtitle: "Dr. Flinn / C.B. Charlie Lee",
            meta: "LHS Patriot Theatre",
            description:
              "A historical drama based on the true story of young women poisoned by radium while working in factories, and their fight for justice against powerful institutions.",
          },
          {
            title: "Check Please: Take Two",
            subtitle: "Director",
            meta: "LHS Patriot Theatre",
            description:
              "A fast-paced comedy built around a series of disastrous blind dates, quick transitions, and sharply contrasted characters.",
          },
        ],
      },
      {
        id: "performances",
        label: "Performances",
        intro: "Live showcases and public-facing performance work.",
        entries: [
          {
            title: "Nevada Thespian State Conference Opening Number",
            subtitle: "Performer",
            meta: "State conference appearance",
            description:
              "Featured performer in the opening number for the Nevada Thespian State Conference, delivering a dynamic combination of vocals, choreography, and character performance.",
          },
          {
            title: "Public Education Foundation Ed Hero Award Gala",
            subtitle: "Performing artist",
            meta: "Las Vegas, Nevada",
            description:
              "Featured performer at the Public Education Foundation Ed Hero Award Gala, presenting a polished live performance through singing, dancing, and acting.",
          },
        ],
      },
      {
        id: "awards",
        label: "Awards",
        intro: "Recognition earned through adjudicated theatre events and performance presentation.",
        entries: [
          {
            title: "International Thespian Festival",
            subtitle: "Superior in Individual Events",
            description:
              "Received a Superior rating in Individual Events at the International Thespian Festival, recognizing excellence in performance, preparation, and theatrical presentation.",
          },
          {
            title: "State Thespian Festival",
            subtitle: "Superior in Individual Events",
            description:
              "Earned a Superior rating in Individual Events at the State Thespian Conference, reflecting strong performance quality, stage presence, and execution.",
          },
        ],
      },
      {
        id: "skills",
        label: "Skills",
        intro: "Performance tools spanning voice, movement, instruments, and accents.",
        entries: [
          { title: "Vocal", description: "Classical, Pop, Rap, Opera" },
          { title: "Musical Instruments", description: "Guitar, Piano, Violin" },
          { title: "Dance", description: "K-Pop, Hip-Hop" },
          { title: "Accents", description: "British RP, Australian, Russian, American" },
        ],
      },
    ] satisfies CreativeResumeSection[],
  },
  headshots: {
    theme: {
      page: "creative-headshots",
      accent: "#f6f6fa",
      mode: "light",
    } satisfies CreativePageTheme,
    title: "Headshots",
    items: creativeHeadshotSelections,
  },
  photoshoots: {
    theme: {
      page: "creative-photoshoots",
      accent: "#000000",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Photoshoots",
    lead: "Editorial, commencement, and Halloween image studies from the creative archive.",
    defaultId: "editorials",
    rail: [
      { id: "editorials", label: "Editorials" },
      { id: "commencement", label: "Commencement" },
      { id: "halloween", label: "Halloween" },
    ],
    groups: [
      {
        id: "editorials",
        label: "Editorials",
        intro:
          "Styled portraits, monochrome fashion studies, and portfolio-ready frames that carry the strongest editorial energy in the current archive.",
        items: creativeEditorialSelections,
      },
      {
        id: "commencement",
        label: "Commencement",
        intro:
          "Formal graduation portraiture and milestone imagery from the current commencement gallery.",
        items: creativeCommencementSelections,
      },
      {
        id: "halloween",
        label: "Halloween",
        intro:
          "Character-forward styling, costume work, and moodier image studies from the Halloween archive.",
        items: creativeHalloweenSelections,
      },
    ] satisfies CreativeGalleryGroup[],
  },
} as const;
