import { TypesEnum } from "../enums/types.enum";
import { ISuitability } from "./suitability.interface";
import { IAura } from "./aura.interface";
import { Iskill } from "./skill.interface";
export interface Ipal {
  id: number;
  key: string;
  image: string;
  name: string;
  wiki: string;
  types: TypesEnum[];
  imageWiki: string;
  suitabilities: string[];
  suitability: ISuitability[];
  drops: string[];
  aura: IAura;
  skills: Iskill[];
  description: string;
}
