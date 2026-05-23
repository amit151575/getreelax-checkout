/**
 * InputField – reusable text input with label
 * Props:
 *   label      {string}   – field label
 *   placeholder {string}  – input placeholder
 *   value      {string}   – controlled value
 *   onChange   {function} – change handler
 *   optional   {boolean}  – shows "(Optional)" tag
 *   type       {string}   – input type (default: "text")
 */
const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  optional = false,
  type = 'text',
}) => {
  const handleFocus = (e) => {
    e.target.style.borderColor = '#2563EB'
    e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = '#E2E8F0'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label
        style={{ fontSize: 12, fontWeight: 500, color: '#475569' }}
      >
        {label}{' '}
        {optional && (
          <span style={{ fontWeight: 400, color: '#94A3B8' }}>(Optional)</span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          border: '1px solid #E2E8F0',
          borderRadius: 6,
          padding: '9px 12px',
          fontSize: 13,
          color: '#1E293B',
          outline: 'none',
          background: '#FFFFFF',
          width: '100%',
          transition: 'border-color 0.15s, box-shadow 0.15s',
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default InputField
