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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const argon2_1 = __importDefault(require("argon2"));
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
    async register(options, {}) {
        const hashedPassword = await argon2_1.default.hash(options.password);
        const user = {
            firstname: options.firstname,
            lastname: options.lastname,
            avatar: options.avatar,
            email: options.email,
            password: hashedPassword,
            adressLineOne: options.adressLineOne,
            adressLineTwo: options.adressLineTwo,
            city: options.city,
            province: options.province,
            zip: options.zip,
        };
        await typeorm_1.getConnection().getRepository(User_1.User).save(user);
        return user;
    }
};
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("options")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInputs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map