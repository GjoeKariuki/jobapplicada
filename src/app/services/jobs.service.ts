import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobAddedSuccessful, jobAppliedSuccessful, jobDeletedSuccessful, jobWithdrwanSuccessful, jobs, newJobPost,  updatedJobPostSuccess } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor( private http:HttpClient) { }

  getJobs():Observable<jobs[]>{
    return this.http.get<jobs[]>('http://localhost:4000/jobs')
  }

  addJobs(newJob:newJobPost):Observable<jobAddedSuccessful>{
    return this.http.post<jobAddedSuccessful>('http://localhost:4000/jobs',newJob)
  }
  getJobsById(JobID:number):Observable<jobs>{
    return this.http.get<jobs>(`http://localhost:4000/jobs/${JobID}`)
  }
  applyJob(applyJob:jobs):Observable<jobAppliedSuccessful>{
    return this.http.post<jobAppliedSuccessful>('http://localhost:4000/apply',applyJob)
  }
  getJobsByLocation(location:string):Observable<jobs>{
    return this.http.get<jobs>(``)
  }

 withdrawApplication(ApplicationID:number):Observable<jobWithdrwanSuccessful>{
    return this.http.delete<jobWithdrwanSuccessful>(``)
  }
 DeleteJobPost(JobID:number):Observable<jobDeletedSuccessful>{
    return this.http.delete<jobDeletedSuccessful>(``)
  }
  updateJobPost(JobID:number, updatedJPost:newJobPost):Observable<updatedJobPostSuccess>{
    return this.http.put<updatedJobPostSuccess>(``, updatedJPost)
  }
}
