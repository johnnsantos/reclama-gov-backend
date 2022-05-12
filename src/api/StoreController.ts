import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Store } from "../entity/Store";

export const saveNewStore = async (req: Request, res: Response) => {
	const storeRepository = getRepository(Store)
	const savedStore = await storeRepository.save(req.body)
	return res.json(savedStore)
}

export const getAllStores = async (req: Request, res: Response) => {
	const storeRepository = getRepository(Store);
	const stores = await storeRepository.find();
	return res.json(stores);
}