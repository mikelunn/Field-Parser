import { FieldType } from "./fieldType";

export function sortFields(argumentList: FieldType[]): FieldType[] {
  return argumentList
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => {
      if (item.children) {
        return {
          ...item,
          children: sortFields(item.children), // recursively sort children
        };
      }
      return item;
    });
}
