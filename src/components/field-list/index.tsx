import { FieldList } from "./field-list";
import { parseFields } from "./parseFields";
import { sortFields } from "./sortFields";

interface IndexProps {
  fieldsString: string;
  sorted?: boolean;
}
export default function Index({ fieldsString, sorted = false }: IndexProps) {
  const fields = parseFields(fieldsString);
  return <FieldList fields={sorted ? sortFields(fields) : fields} />;
}
