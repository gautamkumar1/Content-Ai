import AvatarCircles from "./ui/avatar-circles";

 
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/91417015?v=4",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
 
export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
}