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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var common_1 = require("@angular/common");
var member_service_1 = require("./member.service");
var MemberDetailComponent = (function () {
    function MemberDetailComponent(memberService, route, location) {
        this.memberService = memberService;
        this.route = route;
        this.location = location;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.memberService.getMember(+param.get('id'));
        })
            .subscribe(function (member) { return _this.member = member; });
    };
    MemberDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return MemberDetailComponent;
}());
MemberDetailComponent = __decorate([
    core_1.Component({
        selector: 'member-detail',
        templateUrl: './member-detail.component.html',
        styleUrls: ['./member-detail.component.css']
    }),
    __metadata("design:paramtypes", [member_service_1.MemberService,
        router_1.ActivatedRoute,
        common_1.Location])
], MemberDetailComponent);
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map