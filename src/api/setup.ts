
export interface DeskDetail {
  width: number;
  length: number;
  freeFieldWidth: number;
  freeFieldLength: number;
  items: string[];
}

export interface Preferences {
  style: string;
}

export interface DeskSetupData {
  id?: string;
  name?: string;
  desk_details: DeskDetail;
  preferences: Preferences;
}

export type PageType = "desk-details" | "preferences" | "summary" | "suggestions";
