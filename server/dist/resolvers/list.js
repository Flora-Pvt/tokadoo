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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const List_1 = require("../entity/List");
require("reflect-metadata");
let ListResolver = class ListResolver {
};
__decorate([
    type_graphql_1.Field(() => List_1.List, { nullable: true }),
    __metadata("design:type", List_1.List)
], ListResolver.prototype, "list", void 0);
ListResolver = __decorate([
    type_graphql_1.ObjectType()
], ListResolver);
exports.ListResolver = ListResolver;
//# sourceMappingURL=list.js.map