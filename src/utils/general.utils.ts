let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]


export const getPublishedTime = (timeString:string) => {

    let date = new Date();
    if (timeString)
         date = new Date(timeString);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const processName = (name:string, limit=30) => {
    if (name.length > 20) {
        return name.substring(0, limit) + '...';
    }
    return name;
}


export const titleCase = (str:string) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}