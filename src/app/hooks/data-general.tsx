import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { StatusPageProps } from "@/app/types/common.types";

export const InfoGeneralData = {
  urlLogo: "/logo.svg",
  urlMap:
    "https://www.google.com/maps/place/42%C2%B022'22.4%22N+20%C2%B026'19.3%22E/@42.3728749,20.4380406,176m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d42.3728749!4d20.4386843!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
  phone: "+383 44 914 140",
  fax: "+383 44 914 140",
  emailInfo: "aurumcantina@gmail.com",
  emailReservations: "aurumcantina@gmail.com",
  address: "Rr. Migjeni",
  city: "Gjakove",
  zip: "50000",
  country: "XK",
  largeCountry: "Kosovo",
  phoneLabel: "Telefoni:",
  faxLabel: "Fax:",
  copyright: "© 2025 Aurum Cantina.",
  scrollToTopLabel: "Larte",
  scrollToTopIconClasses: "fas fa-angle-double-up",
  menuToggleAriaLabelOpen: "Menu",
  menuToggleAriaLabelClose: "Mbyll menu",
  topbar: {
    addressIcon: "fa-solid fa-location-dot",
    addressAriaLabel: "Lokacioni",
    phoneIcon: "fa-solid fa-phone",
    phoneAriaLabel: "Na telefononi",
    emailIcon: "fa-solid fa-envelope",
    emailAriaLabel: "Na kontaktoni",
  },
};

export const LogoData = {
  urlLogo: "/logo.svg",
  altLogo: "Logo",
  hrefLogo: "/",
  widthLogo: 120,
  heightLogo: 120,
};

export const menuLegalData = [
  {
    id: 1,
    title: "Privacy Policy",
    link: "/",
  },
  {
    id: 2,
    title: "Spam Policy",
    link: "/",
  },
  {
    id: 3,
    title: "Terms & Conditions",
    link: "/",
  },
  {
    id: 4,
    title: "Accessibility Statement",
    link: "/",
  },
];

export const socialIconsData = [
  {
    href: "http://www.facebook.com",
    ariaLabel: "Facebook",
    icon: FaFacebookF,
  },
  // {
  //   href: "http://www.twitter.com",
  //   ariaLabel: "Twitter",
  //   icon: FaXTwitter,
  // },
  {
    href: "http://www.instagram.com/aurumcantina",
    ariaLabel: "Instagram",
    icon: FaInstagram,
  },
];

export const confirmationPageData: StatusPageProps = {
  backgroundImageSrc: "/bg/bg-cta.jpg",
  backgroundImageAlt: "Decorative background with a pleasant texture",
  imageSrc: "",
  imageAlt: "Illustration for confirmation page",
  imageWidth: 500,
  imageHeight: 283,
  heading: "Thank you!",
  text: "We have received your submission and will get back to you as soon as possible.",
  buttonLink: "/",
  buttonText: "Back to Homepage",
};
