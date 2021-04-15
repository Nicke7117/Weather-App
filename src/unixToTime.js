export const unixToTime = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString("it-IT").split("", 5);
}
