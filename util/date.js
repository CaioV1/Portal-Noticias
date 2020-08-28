const date = new Date();

const year = new Intl.DateTimeFormat("br", { year: "numeric" }).format(date);
const month = new Intl.DateTimeFormat("br", { month: "numeric" }).format(date);
const day = new Intl.DateTimeFormat("br", { day: "numeric" }).format(date);
const hour = new Intl.DateTimeFormat("br", { hour: "numeric" }).format(date);
const minute = new Intl.DateTimeFormat("br", { minute: "numeric" }).format(date);
const second = new Intl.DateTimeFormat("br", { second: "numeric" }).format(date);

const formatedDate = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

exports.formatedDate =  formatedDate;