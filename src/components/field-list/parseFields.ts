import { FieldType } from "./fieldType";

enum FieldToken {
  Start = "(",
  End = ")",
  Separator = ",",
}
export function parseFields(fields: string): FieldType[] {
  let i = 0;

  const parseFn = (input: string): FieldType[] => {
    let name = "";
    let result: FieldType[] = [];

    while (i < input.length) {
      const char = input[i];
      i++;
      switch (char) {
        case FieldToken.Start: {
          // Start of new fields. Call parseFn recursively
          // If parent push new field name and fields to result
          // No parent indicates fields are top level fields
          const fields = parseFn(input);
          const isParentField = !!name;
          if (isParentField) {
            result.push({ name, children: fields });
            name = "";
          } else {
            result.push(...fields);
          }
          break;
        }
        case FieldToken.End: {
          // End of fields. Push new field into result.
          if (name) result.push({ name });
          return result;
        }
        case FieldToken.Separator: {
          // Field separator, push new field into result and reset field name.
          if (name) result.push({ name });
          name = "";
          break;
        }
        default: {
          // Assign each non-empty character to field name
          if (char.trim()) {
            name += char;
          }
        }
      }
    }
    return result;
  };
  return parseFn(fields);
}
