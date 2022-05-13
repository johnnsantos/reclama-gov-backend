import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Requirement } from "../entity/Requirement";

export const saveNewRequirement = async (req: Request, res: Response) => {
  const requirementsRepository = getRepository(Requirement);
  const savedRequirement = await requirementsRepository.save(req.body);
  return res.json(savedRequirement);
};

export const getAllRequirements = async (req: Request, res: Response) => {
  const requirementsRepository = getRepository(Requirement);
  const requirements = await requirementsRepository.find();
  return res.json(requirements);
};
