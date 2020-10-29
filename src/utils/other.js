//深層複製資料
export const deepCopy = object => {
  let info = "";
  !!object && (info = JSON.parse(JSON.stringify(object)));
  return info;
};