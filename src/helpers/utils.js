export const request = async url => {
  let res = await fetch(url);
  res = await res.json();

  return res.message;
}
