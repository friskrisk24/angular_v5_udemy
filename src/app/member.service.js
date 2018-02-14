"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MemberService = (function () {
    function MemberService(http) {
        this.http = http;
        this.membersUrl = 'api/members';
    }
    MemberService.prototype.getMembers = function () {
        return this.http.get(this.membersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(MEMBERS);
    };
    MemberService.prototype.getMember = function (id) {
        return this.getMembers()
            .then(function (members) { return members.find(function (member) { return member.id === id; }); });
    };
    MemberService.prototype.handleError = function (error) {
        console.error('エラー', error);
        return Promise.reject(error.message || error);
    };
    return MemberService;
}());
MemberService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map