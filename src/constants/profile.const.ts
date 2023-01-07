export const profileConst = {
  name: "Nhat",
  altName: "James",
  origin: "Vietnam",
  location: "Sydney NSW (Australia)",
  occupation: "frontend web developer",
  experience: "3+",
  language: "ReactJS",
}

export const socialConst = {
  GITHUB: "https://www.github.com/jimmynguyen1308",
  LINKEDIN: "https://www.linkedin.com/in/nhatnguyen138",
  TWITTER: "https://twitter.com/jimmynguyen1308",
}

export const contactConst = {
  PHONE: ["tel:+61416851646", "+61 416 851 646"],
  EMAIL: ["mailto:kimnhat98@gmail.com", "kimnhat98@gmail.com"],
  LINKEDIN: [socialConst.LINKEDIN, socialConst.LINKEDIN],
  GITHUB: [socialConst.GITHUB, socialConst.GITHUB],
  TWITTER: [socialConst.TWITTER, "@jimmynguyen1308"],
} as const
