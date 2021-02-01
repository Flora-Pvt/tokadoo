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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entity/User");
let UserInputs = class UserInputs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "firstname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "lastname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "adressLineOne", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "adressLineTwo", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "province", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInputs.prototype, "zip", void 0);
UserInputs = __decorate([
    type_graphql_1.InputType()
], UserInputs);
let UserResolver = class UserResolver {
    register(options, { req }) {
        let user = new User_1.User();
        user.firstname = options.firstname;
        user.lastname = options.lastname;
        user.avatar = options.avatar;
        user.email = options.email;
        user.password = options.password;
        user.adressLineOne = options.adressLineOne;
        user.adressLineTwo = options.adressLineTwo;
        user.city = options.city;
        user.province = options.province;
        user.zip = options.zip;
        return user;
    }
};
__decorate([
    type_graphql_1.Mutation(),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInputs, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map