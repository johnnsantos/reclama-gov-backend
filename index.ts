import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as StoreController from './src/api/StoreController';

const PORT = 3000;

const startup =  async () => {
	  await createConnection();
	  const app = express();

	  app.use(express.json());
	  app.use(cors());
	  app.post('/stores', StoreController.saveNewStore);
	  app.get('/stores', StoreController.getAllStores);
	  app.listen(PORT, () => {
		    console.log(`Server started on port ${PORT}`);
	  })
}

startup();