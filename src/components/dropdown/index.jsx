const Dropdown = ({ name, items, value, className, onChange }) => (
  <div className="w-full my-4">
    <label className="capitalize align-left text-gray-600 mx-1" htmlFor={name}>
      {name}
    </label>
    <select id={name} onChange={onChange} value={value} className={`w-full h-12 text-xl border rounded-lg p-2 mt-2 ${className}`} name={name}>
      {items.map(i => (
        <option value={i.value}>{i.text}</option>
      ))}
    </select>
  </div>
);

export { Dropdown };
