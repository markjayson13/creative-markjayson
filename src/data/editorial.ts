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
    src: withBase("/images/creative/headshots/headshot-01.jpeg"),
    alt: "Cinematic seated portrait of Mark Jayson Farol in officewear.",
    caption: "Cinematic portrait",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/headshot-02.jpeg"),
    alt: "Studio headshot of Mark Jayson Farol in a dark blazer against a light background.",
    caption: "Studio headshot",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/headshot-03.jpeg"),
    alt: "Angled portrait study of Mark Jayson Farol in a dark jacket.",
    caption: "Angled portrait study",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeEditorialSelections = [
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-02.jpg"),
    alt: "Black-and-white editorial portrait of Mark Jayson Farol in sunglasses and a leather jacket.",
    caption: "Black-and-white editorial portrait",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-01.jpeg"),
    alt: "Editorial portrait of Mark Jayson Farol from the creative archive.",
    caption: "Editorial portrait I",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-03.jpg"),
    alt: "Styled editorial portrait of Mark Jayson Farol.",
    caption: "Editorial portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-04.jpeg"),
    alt: "Editorial study of Mark Jayson Farol with fashion-forward styling.",
    caption: "Editorial portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-05.jpeg"),
    alt: "Creative editorial image of Mark Jayson Farol.",
    caption: "Editorial portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-06.jpeg"),
    alt: "Editorial close portrait of Mark Jayson Farol.",
    caption: "Editorial portrait V",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeCommencementSelections = [
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-08.jpg"),
    alt: "Commencement portrait of Mark Jayson Farol in graduation regalia against the Las Vegas skyline.",
    caption: "Commencement portrait I",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-01.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol.",
    caption: "Commencement portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-02.jpeg"),
    alt: "Formal graduation image of Mark Jayson Farol.",
    caption: "Commencement portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-03.jpeg"),
    alt: "Graduation photo study of Mark Jayson Farol.",
    caption: "Commencement portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-04.jpeg"),
    alt: "Commencement image of Mark Jayson Farol with a cap and gown.",
    caption: "Commencement portrait V",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-05.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol from the local creative archive.",
    caption: "Commencement portrait VI",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-06.jpeg"),
    alt: "Commencement portrait of Mark Jayson Farol in evening light.",
    caption: "Commencement portrait VII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-07.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol in a formal pose.",
    caption: "Commencement portrait VIII",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeHalloweenSelections = [
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-03.jpeg"),
    alt: "Halloween character portrait of Mark Jayson Farol inside a library aisle.",
    caption: "Character portrait I",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-01.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol from the costume archive.",
    caption: "Character portrait II",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-02.jpeg"),
    alt: "Costumed Halloween study of Mark Jayson Farol.",
    caption: "Character portrait III",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-04.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol in a staged scene.",
    caption: "Character portrait IV",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-05.jpeg"),
    alt: "Costume-based portrait of Mark Jayson Farol.",
    caption: "Character portrait V",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-06.jpeg"),
    alt: "Halloween portrait from the current creative archive.",
    caption: "Character portrait VI",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-07.jpeg"),
    alt: "Dramatic Halloween image of Mark Jayson Farol.",
    caption: "Character portrait VII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-08.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol in costume.",
    caption: "Character portrait VIII",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-09.jpeg"),
    alt: "Styled Halloween portrait of Mark Jayson Farol.",
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
