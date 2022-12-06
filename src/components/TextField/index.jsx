import './TextField.css';

export function TextField({ label, placeholder, valor, aoAlterado, required }) {

  return (
    <div className="text-field">
      <label>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => aoAlterado(e.target.value)}
        value={valor}
        required={required}
      />
    </div>
  );
}
