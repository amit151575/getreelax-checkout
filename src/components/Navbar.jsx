import { SearchIcon, UpgradeArrowIcon, PlusIcon, MenuIcon } from './icons'

/**
 * Navbar – top navigation bar
 * Matches the Getreelax platform header in the Figma design
 */
const Navbar = () => {
  return (
    <nav
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '0 24px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Search bar */}
      <div
        style={{
          flex: 1,
          maxWidth: 380,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: 8,
          padding: '7px 12px',
        }}
      >
        <span style={{ color: '#94A3B8', display: 'flex' }}>
          <SearchIcon />
        </span>
        <input
          placeholder="Find influencers to collaborate with"
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: 13,
            color: '#64748B',
            width: '100%',
          }}
        />
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Actions */}
      <div
        className="navbar-actions"
        style={{ display: 'flex', alignItems: 'center', gap: 12 }}
      >
        {/* Upgrade button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: '#FEF3C7',
            color: '#D97706',
            border: '1px solid #FDE68A',
            borderRadius: 6,
            padding: '6px 12px',
            fontSize: 12,
            fontWeight: 600,
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE68A')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#FEF3C7')}
        >
          <UpgradeArrowIcon />
          <span className="btn-label">Upgrade</span>
        </button>

        {/* Create Campaign button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 6,
            padding: '6px 14px',
            fontSize: 12,
            fontWeight: 600,
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1D4ED8')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#2563EB')}
        >
          <PlusIcon />
          <span className="btn-label">Create Campaign</span>
        </button>

        {/* Avatar */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 12,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          A
        </div>

        {/* Menu icon */}
        <span style={{ color: '#94A3B8', display: 'flex', cursor: 'pointer' }}>
          <MenuIcon />
        </span>
      </div>
    </nav>
  )
}

export default Navbar
