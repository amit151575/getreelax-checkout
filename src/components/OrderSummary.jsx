import { useState } from 'react'
import {
  UpgradeArrowIcon,
  WalletIcon,
  TagIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  EmptyCircleIcon,
} from './icons'

const COUPONS = [
  { code: 'WELCOME20', desc: '20% off on your first month', discount: 0.2 },
  { code: 'ANNUAL50',  desc: '50% off on annual plans',    discount: 0.5 },
]

const PLAN = {
  name: 'Startup',
  price: 14999,
  monthly: 4999,
  credits: '5,000',
}

const TAX_RATE = 0.18
const WALLET_AMOUNT = 500

/**
 * OrderSummary – right-side order summary panel
 * Includes plan details, wallet, coupon, price breakdown, and CTA
 */
const OrderSummary = () => {
  const [couponPanelOpen, setCouponPanelOpen] = useState(true)
  const [couponInput, setCouponInput]         = useState('')
  const [selectedCoupon, setSelectedCoupon]   = useState('WELCOME20')
  const [walletApplied, setWalletApplied]     = useState(false)
  const [couponError, setCouponError]         = useState('')

  // ── Price calculations ──────────────────────────────────────────────────
  const activeCoupon    = COUPONS.find((c) => c.code === selectedCoupon)
  const couponDiscount  = activeCoupon ? PLAN.price * activeCoupon.discount : 0
  const walletDiscount  = walletApplied ? WALLET_AMOUNT : 0
  const afterDiscounts  = PLAN.price - couponDiscount - walletDiscount
  const tax             = afterDiscounts * TAX_RATE
  const total           = afterDiscounts + tax

  const fmt = (n) =>
    n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleApplyCoupon = () => {
    const match = COUPONS.find((c) => c.code === couponInput.trim().toUpperCase())
    if (match) {
      setSelectedCoupon(match.code)
      setCouponInput('')
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code.')
    }
  }

  const toggleCoupon = (code) => {
    setSelectedCoupon((prev) => (prev === code ? '' : code))
  }

  // ── Shared styles ─────────────────────────────────────────────────────────
  const divider = { borderBottom: '1px solid #F1F5F9' }

  return (
    <div
      className="order-summary"
      style={{
        background: '#FFFFFF',
        borderRadius: 12,
        border: '1px solid #E2E8F0',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 20 }}>
        Order Summary
      </h2>

      {/* ── Plan row ── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingBottom: 16,
          ...divider,
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#0F172A' }}>
            ₹{PLAN.monthly.toLocaleString('en-IN')}
            <span style={{ fontSize: 13, fontWeight: 400, color: '#64748B' }}>
              /month
            </span>
          </div>
          <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 3 }}>
            Includes {PLAN.credits} credits/mo.
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: '#2563EB',
              letterSpacing: '0.08em',
              marginBottom: 4,
            }}
          >
            SELECTED PLAN
          </div>
          <div
            style={{
              background: '#EFF6FF',
              color: '#2563EB',
              borderRadius: 6,
              padding: '3px 12px',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {PLAN.name}
          </div>
        </div>
      </div>

      {/* ── Upgrade link ── */}
      <div style={{ padding: '12px 0', ...divider }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            width: '100%',
            background: 'none',
            border: 'none',
            color: '#2563EB',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <UpgradeArrowIcon /> Upgrade to Growth Plan
        </button>
      </div>

      {/* ── Wallet ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 0',
          ...divider,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#64748B', display: 'flex' }}>
            <WalletIcon />
          </span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#1E293B' }}>
              Wallet Balance
            </div>
            <div style={{ fontSize: 11, color: '#94A3B8' }}>
              ₹{WALLET_AMOUNT.toFixed(2)} available
            </div>
          </div>
        </div>
        <button
          onClick={() => setWalletApplied((w) => !w)}
          style={{
            background: 'none',
            border: 'none',
            color: walletApplied ? '#DC2626' : '#2563EB',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {walletApplied ? 'Remove' : 'Apply'}
        </button>
      </div>

      {/* ── Coupon section ── */}
      <div style={{ padding: '14px 0', ...divider }}>
        {/* Header toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={() => setCouponPanelOpen((o) => !o)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#64748B', display: 'flex' }}>
              <TagIcon />
            </span>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#1E293B' }}>
              Apply Coupon
            </span>
          </div>
          <span style={{ color: '#94A3B8', display: 'flex' }}>
            {couponPanelOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </div>

        {couponPanelOpen && (
          <div style={{ marginTop: 14 }}>
            {/* Manual input */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <input
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value.toUpperCase())
                  setCouponError('')
                }}
                placeholder="Enter coupon code"
                style={{
                  flex: 1,
                  border: couponError ? '1px solid #EF4444' : '1px solid #E2E8F0',
                  borderRadius: 6,
                  padding: '8px 10px',
                  fontSize: 12,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                onBlur={(e) =>
                  (e.target.style.borderColor = couponError ? '#EF4444' : '#E2E8F0')
                }
                onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
              />
              <button
                onClick={handleApplyCoupon}
                style={{
                  background: '#2563EB',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 16px',
                  fontSize: 12,
                  fontWeight: 600,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1D4ED8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2563EB')}
              >
                Apply
              </button>
            </div>

            {couponError && (
              <p style={{ fontSize: 11, color: '#EF4444', marginBottom: 8 }}>
                {couponError}
              </p>
            )}

            {/* Coupon list */}
            {COUPONS.map((c) => {
              const isSelected = selectedCoupon === c.code
              return (
                <div
                  key={c.code}
                  onClick={() => toggleCoupon(c.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: 8,
                    marginBottom: 8,
                    border: `1px solid ${isSelected ? '#BFDBFE' : '#F1F5F9'}`,
                    background: isSelected ? '#EFF6FF' : '#F8FAFC',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      style={{
                        background: isSelected ? '#DBEAFE' : '#E2E8F0',
                        color: isSelected ? '#2563EB' : '#64748B',
                        borderRadius: 4,
                        padding: '2px 8px',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        transition: 'all 0.15s',
                      }}
                    >
                      {c.code}
                    </span>
                    <span style={{ fontSize: 11, color: '#64748B' }}>{c.desc}</span>
                  </div>
                  {isSelected ? <CheckCircleIcon /> : <EmptyCircleIcon />}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Price breakdown ── */}
      <div style={{ padding: '16px 0', ...divider }}>
        <PriceRow label="Subtotal" value={`₹${fmt(PLAN.price)}`} />
        {couponDiscount > 0 && (
          <PriceRow
            label={`Coupon (${activeCoupon.code})`}
            value={`-₹${fmt(couponDiscount)}`}
            valueColor="#16A34A"
          />
        )}
        {walletApplied && (
          <PriceRow label="Wallet" value={`-₹${fmt(walletDiscount)}`} valueColor="#16A34A" />
        )}
        <PriceRow label="Tax (18% GST)" value={`₹${fmt(tax)}`} />
      </div>

      {/* ── Total ── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0 20px',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: '#0F172A' }}>
          Total due today
        </span>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#2563EB' }}>
          {fmt(total)}
        </span>
      </div>

      {/* ── CTA ── */}
      <button
        style={{
          width: '100%',
          background: '#2563EB',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: 8,
          padding: '12px 0',
          fontSize: 14,
          fontWeight: 600,
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#1D4ED8')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#2563EB')}
      >
        Proceed to Payment
      </button>
    </div>
  )
}

/** Small helper row for price lines */
const PriceRow = ({ label, value, valueColor = '#1E293B' }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8,
    }}
  >
    <span style={{ fontSize: 13, color: '#64748B' }}>{label}</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: valueColor }}>{value}</span>
  </div>
)

export default OrderSummary
