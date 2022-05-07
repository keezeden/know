const Dropdown = ({ name, items, className, onChange }) => (
  <select onChange={onChange} className={`w-full h-12 text-xl border rounded-lg p-2 ${className}`} name={name}>
    {items.map(i => (
      <option value={i.value}>{i.text}</option>
    ))}
  </select>
);

export { Dropdown };
