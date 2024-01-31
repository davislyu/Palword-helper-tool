import type { TypesEnum } from "../enums/types.enum";

export interface Iskill {
  level: number;
  name: string;
  type: TypesEnum;
  cooldown: number;
  power: number;
  description: string;
}
