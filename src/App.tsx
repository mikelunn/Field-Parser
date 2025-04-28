import "./styles.css";
import FieldList from "./components/field-list";

export default function App() {
  const fieldsString =
    "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
  return (
    <div className="App">
      <h1>Field String Parser</h1>
      <h2>Result</h2>
      <FieldList fieldsString={fieldsString} />
      <h2>Sorted Result</h2>
      <FieldList fieldsString={fieldsString} sorted />
    </div>
  );
}
