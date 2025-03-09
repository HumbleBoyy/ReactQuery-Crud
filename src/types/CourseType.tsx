
export interface CourseCreateType {
    name:string,
    price:number | string,
    duration:number | string,
    studyTime:number | string,
    location:string,
    teacher:string
}

export interface CourseItemType extends CourseCreateType {
    id:number
}