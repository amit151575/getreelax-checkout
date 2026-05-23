import InputField from './ui/InputField'
import SelectField from './ui/SelectField'

const STATES = [
  'Andhra Pradesh', 'Delhi', 'Gujarat', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan',
  'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal',
]

const CITIES = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini', 'Saket'],
  Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Noida'],
  'West Bengal': ['Kolkata', 'Siliguri', 'Durgapur'],
}

/**
 * BillingForm – billing information form
 * Props:
 *   form       {object}   – form state values
 *   onChange   {function} – (field) => handler for that field
 *   onCancel   {function} – cancel button handler
 *   onSave     {function} – save details button handler
 */
const BillingForm = ({ form, onChange, onCancel, onSave }) => {
  const cities = CITIES[form.state] || []

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: 12,
        border: '1px solid #E2E8F0',
        padding: '32px',
      }}
    >
      {/* Section title */}
      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: 24,
        }}
      >
        Review your details
      </h1>

      <h2
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#334155',
          marginBottom: 20,
        }}
      >
        Billing Information
      </h2>

      {/* Form grid */}
      <div
        className="billing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
        }}
      >
        <InputField
          label="Company Name"
          placeholder="Enter company name"
          value={form.companyName}
          onChange={onChange('companyName')}
        />
        <InputField
          label="Email"
          placeholder="Enter email address"
          type="email"
          value={form.email}
          onChange={onChange('email')}
        />
        <InputField
          label="GST Number"
          placeholder="GST Number"
          value={form.gst}
          onChange={onChange('gst')}
          optional
        />
        <InputField
          label="PAN Number"
          placeholder="PAN Number"
          value={form.pan}
          onChange={onChange('pan')}
          optional
        />
        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
          value={form.premise}
          onChange={onChange('premise')}
        />
        <InputField
          label="Street"
          placeholder="Street"
          value={form.street}
          onChange={onChange('street')}
        />
        <SelectField
          label="State"
          placeholder="Select state"
          value={form.state}
          onChange={onChange('state')}
          options={STATES}
        />
        <SelectField
          label="City"
          placeholder="Select city"
          value={form.city}
          onChange={onChange('city')}
          options={cities}
        />
        <InputField
          label="Country"
          placeholder="India"
          value={form.country}
          onChange={onChange('country')}
        />
        <InputField
          label="Pin Code"
          placeholder="Pincode"
          value={form.pincode}
          onChange={onChange('pincode')}
        />
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          marginTop: 32,
        }}
      >
        <button
          onClick={onCancel}
          style={{
            padding: '10px 32px',
            borderRadius: 8,
            border: '1px solid #E2E8F0',
            background: '#FFFFFF',
            color: '#64748B',
            fontSize: 14,
            fontWeight: 500,
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          style={{
            padding: '10px 32px',
            borderRadius: 8,
            border: 'none',
            background: '#2563EB',
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: 600,
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1D4ED8')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#2563EB')}
        >
          Save Details
        </button>
      </div>
    </div>
  )
}

export default BillingForm
