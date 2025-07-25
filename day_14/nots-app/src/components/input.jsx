const Input = ({ label, value, onChange, type = 'text', className }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full border px-3 py-2 rounded ${className}`}
    />
  </div>
);

export default Input;