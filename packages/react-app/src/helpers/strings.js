export const ellipsizedAddress = longAddress =>
  longAddress ? `${longAddress.slice(0, 6)}...${longAddress.slice(-4)}` : "";

export const parseGithubReadme = text =>
  text
    .replace("# 🏗 scaffold-eth | 🏰 BuidlGuidl", "")
    .replace(/🏆.*?🍾/g, "")
    .replace(/🎖.*?🎖/g, "");

export const isValidUrl = urlText => {
  let url;

  try {
    url = new URL(urlText);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

export const isBoolean = val => typeof val === "boolean";

export const getYoutubeVideoId = youtubeUrl => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = youtubeUrl.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};
