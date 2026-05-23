import { useState } from 'react'
import Navbar from '../components/Navbar'
import BillingForm from '../components/BillingForm'
import OrderSummary from '../components/OrderSummary'
import { ArrowLeftIcon } from '../components/icons'

const INITIAL_FORM = {
  companyName: 'abhigyan',
  email: 'abhigyanpandey@getreelax.com',
  gst: '',
  pan: '',
  premise: '',
  street: '',
  state: '',
  city: '',
  country: 'India',
  pincode: '',
}

/**
 * CheckoutReview page
 * Combines Navbar + BillingForm + OrderSummary into the full checkout layout.
 */
const CheckoutReview = () => {
  const [form, setForm] = useState(INITIAL_FORM)

  /** Returns a change handler for a specific form field */
  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleCancel = () => {
    setForm(INITIAL_FORM)
  }

  const handleSave = () => {
    // Validate required fields
    const required = ['companyName', 'email', 'premise', 'street', 'state', 'city', 'pincode']
    const missing = required.filter((f) => !form[f])
    if (missing.length) {
      alert(`Please fill in: ${missing.join(', ')}`)
      return
    }
    alert('Details saved successfully!')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      {/* Top Navigation */}
      <Navbar />

      {/* Page body */}
      <main
        className="page-content"
        style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 24px' }}
      >
        {/* Back link */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            color: '#64748B',
            fontSize: 13,
            marginBottom: 24,
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={() => window.history.back()}
        >
          <ArrowLeftIcon /> Back to plans
        </button>

        {/* Two-column grid */}
        <div
          className="main-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 24,
            alignItems: 'start',
          }}
        >
          {/* Left – billing form */}
          <BillingForm
            form={form}
            onChange={handleChange}
            onCancel={handleCancel}
            onSave={handleSave}
          />

          {/* Right – order summary */}
          <OrderSummary />
        </div>
      </main>
    </div>
  )
}

export default CheckoutReview
