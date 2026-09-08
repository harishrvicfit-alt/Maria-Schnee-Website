export const documentCategories = [
  { value: "pflegeinformationen", label: "Pflegeinformationen" },
  { value: "qualitaet", label: "Qualität & Transparenz" },
  { value: "formulare", label: "Formulare & Hinweise" },
  { value: "sonstiges", label: "Weitere Dokumente" },
] as const;

export type DocumentCategory = (typeof documentCategories)[number]["value"];
export type PublicDocument = {
  id: string;
  title: string;
  category: DocumentCategory;
  categoryLabel: string;
  pathname: string;
  url: string;
  downloadUrl: string;
  size: number;
  uploadedAt: string;
};

export function isDocumentCategory(value: string): value is DocumentCategory {
  return documentCategories.some((category) => category.value === value);
}
