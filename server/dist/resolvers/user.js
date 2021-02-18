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
UserInputs = __decorate([
    type_graphql_1.InputType()
], UserInputs);
let LoginInputs = class LoginInputs {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInputs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInputs.prototype, "password", void 0);
LoginInputs = __decorate([
    type_graphql_1.InputType()
], LoginInputs);
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    async loggedUser({ req }) {
        if (!req.session.userId) {
            return null;
        }
        const user = await typeorm_1.getConnection()
            .getRepository(User_1.User)
            .findOne({ id: req.session.userId });
        return user;
    }
    async register(options, {}) {
        if (options.password.length < 8) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "le mot de passe doit contenir au moins 7 caractères",
                    },
                ],
            };
        }
        const hashedPassword = await argon2_1.default.hash(options.password);
        const user = {
            firstname: options.firstname,
            lastname: options.lastname,
            avatar: options.avatar,
            email: options.email,
            password: hashedPassword,
        };
        try {
            await typeorm_1.getConnection().getRepository(User_1.User).save(user);
        }
        catch (err) {
            if (err.code === "ER_DUP_ENTRY")
                return {
                    errors: [{ field: "email", message: "cet email est déjà enregistré" }],
                };
        }
        return user;
    }
    async login(options, { req }) {
        const user = await typeorm_1.getConnection()
            .getRepository(User_1.User)
            .findOne({ email: options.email });
        if (!user) {
            return {
                errors: [{ field: "email", message: "cet email n'est pas enregistré" }],
            };
        }
        const validPassword = await argon2_1.default.verify(user.password, options.password);
        if (!validPassword) {
            return {
                errors: [{ field: "password", message: "mot de passe incorrect" }],
            };
        }
        req.session.userId = user.id;
        return { user };
    }
};
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "loggedUser", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("options")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInputs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInputs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map