const getTime = (time: Date) => {
  const in_s = Math.abs(
    Math.floor((new Date().getTime() - time.getTime()) / 1000)
  );
  const s = formatNum(in_s % 60);
  const m = formatNum(Math.floor((in_s % 3600) / 60));
  const h = formatNum(Math.floor(in_s / 3600));
  return `${h}h ${m}m ${s}s`;
};

const formatNum = (num: number) => {
  return ("0" + String(num)).substr(-2);
};
export default getTime;
