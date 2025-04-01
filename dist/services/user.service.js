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
exports.UserService = void 0;
const prisma_1 = require("../database/prisma");
class UserService {
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.prisma.user.findMany();
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.prisma.user.findUnique({ where: { id } });
        });
    }
    static createUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                },
            });
        });
    }
}
exports.UserService = UserService;
