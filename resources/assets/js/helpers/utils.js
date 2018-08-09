export function serialize (obj) {
  let result = [];

  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      result.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return result.join("&");
}
