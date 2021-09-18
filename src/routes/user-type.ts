interface User {
    firstName: string;
    lastName:string;
    introduction:string;
    email:string;
    phone:string;
    experience:string;
    achivements:string;
}


interface Filter {
    attributes:string[]
}
export {
    User,
    Filter,
};
