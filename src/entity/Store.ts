import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar")
	name: string;

	@Column("varchar")
	description: string;

	@Column("varchar")
	category: string;

	@Column("varchar")
	contact: string;

	@Column("double precision")
	lat: number;

	@Column("double precision")
	long: number;
}