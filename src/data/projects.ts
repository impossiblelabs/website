export type Project = {
  title: string;
  description: string;
  image: string;
  markdown: string;
};

export const projects: Project[] = [
  {
    title: "Portable BadUSD",
    description:
      "Personal implementation of the BadUSB exploit with an Atmel 8-bit AVR ATTiny85 acting as a HID keyboard",
    image:
      "https://www.csoonline.com/wp-content/uploads/2023/06/malicious_usb_memory_stick_thumb_drive_with_skull_icon_malware_by_m-a-u_gettyimages-882310638_2400x1600-100836763-orig.jpg?quality=50&strip=all",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/BadUSB/refs/heads/master/README.md",
  },
  {
    title: "Micro GSM Network",
    description:
      "Basic 2G sms and voice calls with a LimeNET Micro v2.1 and the osmocom nitb stack",
    image:
      "https://github.com/OxMarco/Micro-GSM-Network/blob/master/header.png?raw=true",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Micro-GSM-Network/refs/heads/master/README.md",
  },
  {
    title: "Ethereum LoRa",
    description: "A long-range low-power radio interface for Ethereum nodes",
    image:
      "https://github.com/OxMarco/ethereum-lora/blob/master/header.png?raw=true",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/ethereum-lora/refs/heads/master/README.md",
  },
  {
    title: "LoRa P2P Network",
    description: "Long range radio communication system using LoRa",
    image:
      "https://raw.githubusercontent.com/grcasanova/Talker/master/logo.png",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/Talker/refs/heads/master/README.md",
  },
  {
    title: "AI dating helper",
    description: "Automate dating apps with AI (Tinder and Grindr)",
    image:
      "https://github.com/OxMarco/AI-dating-helper/blob/master/header.png?raw=true",
    markdown:
      "https://raw.githubusercontent.com/OxMarco/AI-dating-helper/refs/heads/master/README.md",
  },
];
