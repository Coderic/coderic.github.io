import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, defer, from, map } from 'rxjs';
import { Octokit } from '@octokit/rest';
import { FirefunctionsService } from './firefunctions.service';

const octokit = new Octokit({
  auth: environment.services.github,
});
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient, private fire: FirefunctionsService) {}

  inviteMember(invitee_id: number): Observable<any> {
    return this.fire.invite(invitee_id);
  }

  getMember(username: string): Observable<any> {
    return from(octokit.rest.users.getByUsername({ username: username })).pipe(
      map((response: any) => response.data)
    );
  }

  getMembers(): Observable<any> {
    return from(
      octokit.rest.orgs.listMembers({ org: 'CodericLatam', per_page: 1000000 })
    ).pipe(map((response: any) => response.data));
  }

  getRepositories(): Observable<any> {
    return from(octokit.rest.repos.listForOrg({ org: 'CodericLatam' })).pipe(
      map((response: any) => response.data)
    );
  }

  getTeams(): Observable<any> {
    return from(
      octokit.rest.teams.list({
        org: 'CodericLatam',
      })
    ).pipe(map((response: any) => response.data));
  }

  getEvents(): Observable<any> {
    return from(octokit.rest.repos.listForOrg({ org: 'CodericLatam' })).pipe(
      map((response: any) => response.data)
    );
  }

  getIssues(): Observable<any> {
    return defer(() =>
      from(octokit.rest.issues.listForOrg({ org: 'CodericLatam' })).pipe(
        map((response: any) => response.data)
      )
    );
  }

  getDns(): Observable<any> {
    let url = environment.api + '/dns';
    return this.http.get<any>(url);
  }
}