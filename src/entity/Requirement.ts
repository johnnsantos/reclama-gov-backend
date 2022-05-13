import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Requirement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  local_name: string;

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
