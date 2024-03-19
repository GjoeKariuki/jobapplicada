

export interface iusers {
    UserID: number,
    Name: string,
    Password: string,
    Email: string,
    Role: string,
    IsDeleted:number
    bio:string
}

export interface Newusers {
    Name: string,
    Email: string,
    Password: string,
   
}

export interface AddUserSuccess{
    message:string
    Name:string
    token:string
}

export interface Loggedusers {
    Password: string,
    Email: string,
    token:string,
    role:string
}

export interface loggedUserSuccess{
    UserID:number
    role:string
    token:string
    Name:string
    
}
export interface iCourses{
    courseID:number
    name:string
    description:string
    department:string
    credithours:number
    units:units[]
}

export interface units{
    id:string
    name:string
    description:string
    contentUrls?:string
}


export interface iDepartments{
    id: string; 
    name: string;
    headId: string;
    courses: iCourses[];
    lecturerIds: string[];
}

export interface addedSuccessfull{
    message:string
}

export interface iApplication{
    ApplicationID:number
    JobID:number
    UserID:number
    ApplicationDate:Date
    Status:"Applied" | "Not Applied"
    CoverLetter:string
}


export interface jobCategory{
    CategoryID:number
    Name:string
    Description:string
}

// export interface ijobs{
//     CompanyID:number
//     CategoryID:number
//     Title:string
//     Description:string
//     Location:string
//     SalaryRange:string
//     Type:string
//     PostedDate:string
//     ExpiryDate:string
// }
export interface jobs{
    JobID:number
    CompanyID:number
    CategoryID:number
    Title:string
    Description:string
    Location:string
    SalaryRange:string
    Type:string
    PostedDate:string
    ExpiryDate:string
}

export interface jobAddedSuccessful{
    message:string
}
export interface jobAppliedSuccessful{
    message:string
}
export interface jobDeletedSuccessful{
    message:string
}

export interface jobWithdrwanSuccessful{
    message:string
}

export interface newJobPost{

    Title:string
    Description:string
    Location:string
    SalaryRange:string
    Type:string
    PostedDate:string
    ExpiryDate:string
}

export interface updatedJobPostSuccess{
    message:string
}


