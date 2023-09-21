export function getAvatarImageUrl(userName: string) {
  const seed = userName.split(" ").join("%20");
  return `https://api.dicebear.com/7.x/initials/png?seed=${seed}&radius=50&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,5e35b1,d1d4f9,c0aede`;
}
