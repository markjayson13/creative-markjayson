import { withBase } from "../utils/paths";

export const canonicalSiteUrl = "https://creative.markjayson.com";
export const mainSiteUrl = "https://markjayson.com";

const linkedInProfileUrl = "https://www.linkedin.com/in/markjaysonfarol/";
const backstageProfileUrl = "https://www.backstage.com/tal/mark-jayson-farol/";
const instagramProfileUrl = "https://www.instagram.com/markjayson13/";

export type StructuredDataValue =
  | string
  | number
  | boolean
  | null
  | StructuredDataNode
  | StructuredDataValue[];

export type StructuredDataNode = {
  [key: string]: StructuredDataValue;
};

export type StructuredData = StructuredDataNode | StructuredDataNode[];

export type IndexableImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type SocialPreviewImage = IndexableImage & {
  width?: number;
  height?: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type FooterContact = {
  email: string;
  location: string;
  buttonLabel: string;
  buttonHref: string;
};

export type FooterSocialLink = {
  label: string;
  href?: string;
  icon: "linkedin" | "backstage" | "instagram";
  enabled: boolean;
};

export type CornerMenuItem = {
  label: string;
  href: string;
  title: string;
  description: string;
};

export type PageTheme = {
  titleMeasure: string;
  leadMeasure: string;
  copyMeasure?: string;
};

export const profile = {
  name: "Mark Jayson Farol",
  fullName: "Mark Jayson Martinez Farol",
  shortName: "MJF",
  title: "Creative Archive",
  headline: "Artistic resume, headshots, and photoshoot archive for Mark Jayson Martinez Farol.",
  location: "Las Vegas, Nevada, United States",
};

export const footerSecondaryLinks: NavLink[] = [
  { label: "Creative", href: withBase("/") },
  { label: "Artistic Resume", href: withBase("/artistic-resume") },
  { label: "Headshots", href: withBase("/headshots") },
  { label: "Photoshoots", href: withBase("/photoshoots") },
  { label: "Main Site", href: `${mainSiteUrl}/` },
];

export const footerContact: FooterContact = {
  email: "markjayson@markjayson.com",
  location: "Las Vegas, Nevada, United States",
  buttonLabel: "Open Main Site",
  buttonHref: `${mainSiteUrl}/`,
};

export const footerSocialLinks: FooterSocialLink[] = [
  { label: "Instagram", href: instagramProfileUrl, icon: "instagram", enabled: true },
  { label: "Backstage", href: backstageProfileUrl, icon: "backstage", enabled: true },
  { label: "LinkedIn", href: linkedInProfileUrl, icon: "linkedin", enabled: true },
];

export const cornerMenuItems: CornerMenuItem[] = [
  {
    label: "Creative",
    href: withBase("/"),
    title: "Creative",
    description: "Creative landing page with artistic background, headshots preview, and archive entry points.",
  },
  {
    label: "Artistic Resume",
    href: withBase("/artistic-resume"),
    title: "Artistic Resume",
    description: "Performance training, stage credits, awards, and creative skill set.",
  },
  {
    label: "Headshots",
    href: withBase("/headshots"),
    title: "Headshots",
    description: "Still-image headshots and portrait studies from the current creative archive.",
  },
  {
    label: "Photoshoots",
    href: withBase("/photoshoots"),
    title: "Photoshoots",
    description: "Editorial, commencement, and Halloween photoshoot galleries.",
  },
  {
    label: "Main Site",
    href: `${mainSiteUrl}/`,
    title: "Main Site",
    description: "Return to the professional site on markjayson.com.",
  },
];

export const pageThemes: Record<string, PageTheme> = {
  "creative-landing": {
    titleMeasure: "22rem",
    leadMeasure: "38rem",
    copyMeasure: "38rem",
  },
  "creative-artistic-resume": {
    titleMeasure: "34rem",
    leadMeasure: "56rem",
    copyMeasure: "58rem",
  },
  "creative-headshots": {
    titleMeasure: "18rem",
    leadMeasure: "30rem",
    copyMeasure: "34rem",
  },
  "creative-photoshoots": {
    titleMeasure: "24rem",
    leadMeasure: "32rem",
    copyMeasure: "36rem",
  },
};

export const identityPersonStructuredData: StructuredDataNode = {
  "@type": "Person",
  "@id": `${canonicalSiteUrl}/#person`,
  name: profile.fullName,
  alternateName: [profile.name, "Mark Jayson M. Farol"],
  url: canonicalSiteUrl,
  jobTitle: "Actor, singer, performer, and creative storyteller",
  image: new URL(withBase("/images/creative/headshots/headshot-02.jpeg"), canonicalSiteUrl).toString(),
  homeLocation: {
    "@type": "Place",
    name: profile.location,
  },
  sameAs: [instagramProfileUrl, backstageProfileUrl, linkedInProfileUrl],
};

const buildImageObjectNode = (pageUrl: string, image: IndexableImage, index = 1): StructuredDataNode => {
  const imageUrl = new URL(image.src, canonicalSiteUrl).toString();

  return {
    "@type": "ImageObject",
    "@id": `${pageUrl}#image-${index}`,
    contentUrl: imageUrl,
    url: imageUrl,
    caption: image.caption ?? image.alt,
    description: image.alt,
    creator: {
      "@id": String(identityPersonStructuredData["@id"]),
    },
    creditText: profile.name,
    copyrightNotice: profile.name,
  };
};

export const buildImageCollectionPageStructuredData = (
  pageUrl: string,
  pageName: string,
  pageDescription: string,
  images: IndexableImage[],
): StructuredDataNode[] => {
  const imageNodes = images.map((image, index) => buildImageObjectNode(pageUrl, image, index + 1));

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageName,
      description: pageDescription,
      about: {
        "@id": String(identityPersonStructuredData["@id"]),
      },
      creator: {
        "@id": String(identityPersonStructuredData["@id"]),
      },
      image: imageNodes.map((node) => ({
        "@id": String(node["@id"]),
      })),
    },
    {
      "@context": "https://schema.org",
      ...identityPersonStructuredData,
    },
    ...imageNodes.map((node) => ({
      "@context": "https://schema.org",
      ...node,
    })),
  ];
};

export const socialPreviewImages = {
  creativeLanding: {
    src: withBase("/images/creative/photoshoots/editorials/editorial-02.jpg"),
    alt: "Black-and-white editorial portrait of Mark Jayson Farol.",
  },
  creativeHeadshots: {
    src: withBase("/images/creative/headshots/headshot-02.jpeg"),
    alt: "Studio headshot of Mark Jayson Farol in a dark blazer against a light background.",
    width: 1024,
    height: 1536,
  },
  creativePhotoshoots: {
    src: withBase("/images/creative/photoshoots/editorials/editorial-02.jpg"),
    alt: "Black-and-white editorial portrait of Mark Jayson Farol in sunglasses and a leather jacket.",
  },
} satisfies Record<string, SocialPreviewImage>;
