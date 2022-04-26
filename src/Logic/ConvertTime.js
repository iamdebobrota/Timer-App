export default function ConvertTime(time) {
    // typeof time === number
    let h, m, s;
    h = Math.floor(time / 3600);
    m = Math.floor((time % 3600) / 60);
    s = Math.floor((time % 3600) % 60);
    h = h < 10 ? '0'+h : h;
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;
    return `${h}:${m}:${s}`;
}