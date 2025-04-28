import { FieldType } from "./fieldType";

interface FieldListProps {
  fields: FieldType[];
  depth?: number;
}
export function FieldList({ fields, depth = 0 }: FieldListProps) {
  return (
    <ul>
      {fields.map((arg, index) => (
        <li
          key={`${arg.name}-${depth}-${index}`}
          style={{
            paddingLeft: depth ? `${10}px` : "0",
          }}
        >
          - {arg.name}
          {arg.children && (
            <FieldList fields={arg.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}
