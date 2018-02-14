import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemberService {

    membersUrl = 'api/members';

    constructor(private http: Http) { }

    getMembers(): Promise<Member[]> {
        return this.http.get(this.membersUrl)
            .toPromise()
            .then(response => response.json().data as Member[])
            .catch(this.handleError);
        // return Promise.resolve(MEMBERS);
    }

    getMember(id: number): Promise<Member> {
      return this.getMembers()
      .then(members => members.find(member => member.id === id));
    }

    private handleError(error:any): Promise<any> {
        console.error('エラー', error);
        return Promise.reject(error.message || error);
    }
}
