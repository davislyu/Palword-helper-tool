import { SuitabilitiesEnum } from "../enums/suitabilities.enum";

export interface ISuitability {
  type: SuitabilitiesEnum;
  level: number;
}
