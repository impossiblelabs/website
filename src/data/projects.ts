export type Project = {
  title: string;
  description: string;
  image: string;
  markdown: string;
  github?: string;
  website?: string;
  appStore?: string;
  googlePlay?: string;
  /** Short platform/status labels shown on the card */
  tags?: string[];
  /** Brand background behind images that should be shown whole, not cropped */
  background?: string;
  /** How the card image fills its area; "contain" (default) shows the whole image on the brand background */
  imageFit?: "cover" | "contain";
};

// Shipped products with real users, shown first and larger
export const products: Project[] = [
  {
    title: "CashOrTrash",
    description:
      "Guess what stuff costs. Bet a price range, not a number: the tighter the range, the bigger the score",
    image: "/projects/cashortrash.png",
    background: "#f6eadb",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/CashOrTrash/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/CashOrTrash",
    website: "https://cashortrash.fun",
    appStore: "https://apps.apple.com/app/id6805992515",
    googlePlay:
      "https://play.google.com/store/apps/details?id=fun.cashortrash.app",
    tags: ["Game", "iOS", "Android"],
  },
  {
    title: "Quiesco",
    description:
      "An open-source bedroom monitor for CO₂, temperature, humidity, light and noise",
    image: "/projects/quiesco.png",
    background: "#fbfbfc",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Quiesco/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/Quiesco",
    website: "https://quiesco.rest",
    tags: ["Open hardware", "Firmware", "Companion app"],
  },
  {
    title: "BlueBaħar",
    description:
      "Know before you go out at sea: notices to mariners, hazards and weather around Malta on one map",
    image: "/projects/bluebahar.png",
    background: "#78c3ea",
    imageFit: "cover",
    markdown: "/projects/bluebahar.md",
    website: "https://bluebahar.com",
    appStore: "https://apps.apple.com/mt/app/blueba%C4%A7ar/id6766516415",
    googlePlay: "https://play.google.com/store/apps/details?id=com.bluebahar.mt",
    tags: ["Maps", "iOS", "Android"],
  },
];

// Hardware and software experiments
export const projects: Project[] = [
  {
    title: "Lyft",
    description: "A gym tracker device for power lifters",
    image: "https://raw.githubusercontent.com/OxMarco/Lyft/master/header.jpg",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Lyft/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/Lyft",
  },
  {
    title: "Portable BadUSB",
    description:
      "Personal implementation of the BadUSB exploit with an Atmel 8-bit AVR ATTiny85 acting as a HID keyboard",
    image:
      "https://www.csoonline.com/wp-content/uploads/2023/06/malicious_usb_memory_stick_thumb_drive_with_skull_icon_malware_by_m-a-u_gettyimages-882310638_2400x1600-100836763-orig.jpg?quality=50&strip=all",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/BadUSB/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/BadUSB",
  },
  {
    title: "Micro GSM Network",
    description:
      "Basic 2G sms and voice calls with a LimeNET Micro v2.1 and the osmocom nitb stack",
    image:
      "https://raw.githubusercontent.com/OxMarco/Micro-GSM-Network/master/header.png",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Micro-GSM-Network/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/Micro-GSM-Network",
  },
  {
    title: "Ethereum LoRa",
    description: "A long-range low-power radio interface for Ethereum nodes",
    image:
      "https://raw.githubusercontent.com/OxMarco/ethereum-lora/master/header.png",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/ethereum-lora/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/ethereum-lora",
  },
  {
    title: "LoRa P2P Network",
    description: "Long range radio communication system using LoRa",
    image:
      "https://raw.githubusercontent.com/OxMarco/Talker/master/logo.png",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Talker/refs/heads/master/README.md",
    github: "https://github.com/OxMarco/Talker",
  },
];
