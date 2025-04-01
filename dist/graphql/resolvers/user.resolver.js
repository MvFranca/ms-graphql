"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const user_service_1 = require("../../services/user.service");
exports.userResolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () { return yield user_service_1.UserService.getUsers(); }),
        user: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return yield user_service_1.UserService.getUserById(id); }),
    },
    Mutation: {
        createUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { name, email, password }) {
            return yield user_service_1.UserService.createUser(name, email, password);
        }),
    },
};
