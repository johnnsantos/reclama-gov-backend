import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Requirement } from "../entity/Requirement";

export const saveNewRequirement = async (req: Request, res: Response) => {
  try {
    const requirementsRepository = getRepository(Requirement);
    const newRequirement = new Requirement();
    newRequirement.local_name = req.body.local_name;
    newRequirement.description = req.body.description;
    newRequirement.category = req.body.category;
    newRequirement.contact = req.body.contact;
    newRequirement.lat = req.body.lat;
    newRequirement.long = req.body.long;
    await requirementsRepository.save(newRequirement);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const getAllRequirements = async (req: Request, res: Response) => {
  try {
    const requirementsRepository = getRepository(Requirement);
    const requirements = await requirementsRepository.find();
    return res.json(requirements);
  } catch (error) {
    res.sendStatus(500);
  }
};
