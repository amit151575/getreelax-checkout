import { ChevronDownIcon } from '../icons'

/**
 * SelectField – reusable dropdown select with label
 * Props:
 *   label       {string}   – field label
 *   placeholder {string}   – default empty option text
 *   value       {string}   – controlled value
 *   onChange    {function} – change handler
 *   options     {string[]} – list of option strings
 */
const SelectField = ({ label, placeholder, value, onChange, options = [] }) => {
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
      <label style={{ fontSize: 12, fontWeight: 500, color: '#475569' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          style={{
            border: '1px solid #E2E8F0',
            borderRadius: 6,
            padding: '9px 36px 9px 12px',
            fontSize: 13,
            color: value ? '#1E293B' : '#94A3B8',
            outline: 'none',
            background: '#FFFFFF',
            width: '100%',
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
            transition: 'border-color 0.15s, box-shadow 0.15s',
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#94A3B8',
            display: 'flex',
          }}
        >
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  )
}

export default SelectField
