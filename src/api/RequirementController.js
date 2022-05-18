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
exports.getAllRequirements = exports.saveNewRequirement = void 0;
const typeorm_1 = require("typeorm");
const Requirement_1 = require("../entity/Requirement");
const saveNewRequirement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requirementsRepository = (0, typeorm_1.getRepository)(Requirement_1.Requirement);
    const savedRequirement = yield requirementsRepository.save(req.body);
    return res.json(savedRequirement);
});
exports.saveNewRequirement = saveNewRequirement;
const getAllRequirements = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requirementsRepository = (0, typeorm_1.getRepository)(Requirement_1.Requirement);
    const requirements = yield requirementsRepository.find();
    return res.json(requirements);
});
exports.getAllRequirements = getAllRequirements;
