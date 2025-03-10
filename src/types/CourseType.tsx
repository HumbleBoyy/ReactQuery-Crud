
export interface CourseItemType {
    name:string,
    price:string,
    duration:string,
    studyTime:string,
    location:string,
    teacher:string
}

export interface CourseCreateType extends  CourseItemType{
    id?:string
}