/* @ds-bundle: {"format":3,"namespace":"MJBJPayrollDesignSystem_25cef1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MoneyCell","sourcePath":"components/data/MoneyCell.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"e784ff340e72","components/core/Button.jsx":"d79426d93b64","components/core/Card.jsx":"45c982da0617","components/core/IconButton.jsx":"a7806a7bc58f","components/data/DataTable.jsx":"ab4685ecb01c","components/data/MoneyCell.jsx":"aaa76316772d","components/feedback/Dialog.jsx":"9ceb11c95df1","components/feedback/StatusBadge.jsx":"115d00128858","components/feedback/Toast.jsx":"f33565aa50ca","components/forms/Checkbox.jsx":"1fbbd348fdfe","components/forms/Input.jsx":"26eb77e534fd","components/forms/Select.jsx":"402f18bcba63","components/forms/Switch.jsx":"e10579301f60","components/navigation/SidebarNav.jsx":"a7f1177e8344","components/navigation/Tabs.jsx":"77f00a41df18","components/navigation/Topbar.jsx":"3f9417feb220","ui_kits/payroll/AppShell.jsx":"615e990793d5","ui_kits/payroll/DashboardScreen.jsx":"09bd506a4ec3","ui_kits/payroll/PayPeriodsScreen.jsx":"c25a05ac7166","ui_kits/payroll/PayrollRegisterScreen.jsx":"aacf5e47e304","ui_kits/payroll/data.js":"ba70f8567fbe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MJBJPayrollDesignSystem_25cef1 = window.MJBJPayrollDesignSystem_25cef1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Avatar
 * Initials-based avatar (worker/user). Sage-tinted by default.
 */
function Avatar({
  name = '',
  size = 'md',
  src = null,
  style = {},
  ...rest
}) {
  const dims = {
    xs: 22,
    sm: 28,
    md: 34,
    lg: 44
  }[size];
  const font = {
    xs: 9,
    sm: 11,
    md: 13,
    lg: 16
  }[size];
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: dims,
      height: dims,
      flex: `0 0 ${dims}px`,
      borderRadius: '50%',
      background: src ? 'transparent' : 'var(--color-accent-subtle)',
      color: 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: font,
      letterSpacing: '0.02em',
      border: '1px solid var(--color-accent-border)',
      overflow: 'hidden',
      ...style
    },
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Button
 * Bootstrap-derived sizing: 13px text, weight 500, 5px radius.
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  block = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '3px 8px',
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: '5px 11px',
      fontSize: 'var(--text-table)'
    },
    lg: {
      padding: '8px 16px',
      fontSize: 'var(--text-base)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--color-accent)'
    },
    secondary: {
      background: 'var(--surface-content)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-accent)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--danger)',
      color: '#ffffff',
      border: '1px solid var(--danger)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    width: block ? '100%' : 'auto',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1.4,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'background var(--transition-fast), border-color var(--transition-fast)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverBg = {
    primary: 'var(--color-accent-hover)',
    secondary: 'var(--gray-50)',
    ghost: 'var(--color-accent-subtle)',
    danger: '#bf2f2f'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Card
 * White content surface with subtle border. Optional header/footer.
 */
function Card({
  title = null,
  subtitle = null,
  actions = null,
  footer = null,
  padding = true,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-content)',
      border: 'var(--border-solid)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '12px var(--space-6)',
      borderBottom: 'var(--border-subtle-solid)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding ? 'var(--space-5) var(--space-6)' : 0
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--space-6)',
      borderTop: 'var(--border-subtle-solid)',
      background: 'var(--surface-content-alt)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — IconButton
 * Square icon-only action (table row actions, topbar controls).
 */
function IconButton({
  size = 'md',
  variant = 'ghost',
  disabled = false,
  ariaLabel,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 26,
    md: 30,
    lg: 36
  }[size];
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-content)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--color-accent-subtle)',
      color: 'var(--text-accent)',
      border: '1px solid var(--color-accent-border)'
    }
  };
  const hoverBg = {
    ghost: 'var(--gray-100)',
    outline: 'var(--gray-50)',
    accent: 'var(--color-accent-border)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: size === 'sm' ? 14 : 16,
      transition: 'background var(--transition-fast)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — DataTable
 * Data-dense table: gray header, zebra rows, hover tint, active-row left bar.
 * columns: [{ key, label, align?, numeric?, width?, render?(row) }]
 * rows:    array of objects keyed by column.key; optional row.id, row._active
 */
function DataTable({
  columns = [],
  rows = [],
  selectable = false,
  selectedIds = [],
  onToggleRow = null,
  onToggleAll = null,
  zebra = true,
  onRowClick = null,
  style = {},
  ...rest
}) {
  const allChecked = selectable && rows.length > 0 && rows.every(r => selectedIds.includes(r.id));
  const someChecked = selectable && selectedIds.length > 0 && !allChecked;
  const th = {
    textAlign: 'left',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    padding: '8px 12px',
    background: 'var(--surface-canvas)',
    borderBottom: 'var(--border-solid)',
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)',
      background: 'var(--surface-content)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 36,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allChecked,
    ref: el => {
      if (el) el.indeterminate = someChecked;
    },
    onChange: () => onToggleAll && onToggleAll(!allChecked),
    style: {
      accentColor: 'var(--color-accent)',
      cursor: 'pointer'
    }
  })), columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      ...th,
      textAlign: col.numeric || col.align === 'right' ? 'right' : col.align || 'left',
      width: col.width
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => {
    const active = row._active;
    const selected = selectable && selectedIds.includes(row.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: row.id ?? ri,
      onClick: () => onRowClick && onRowClick(row),
      style: {
        background: active ? 'var(--color-accent-subtle)' : selected ? 'rgba(58,140,110,0.05)' : zebra && ri % 2 === 1 ? 'var(--surface-content-alt)' : 'var(--surface-content)',
        borderLeft: active ? '3px solid var(--color-accent)' : '3px solid transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background var(--transition-fast)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--color-accent-subtle)';
      },
      onMouseLeave: e => {
        if (active) return;
        e.currentTarget.style.background = selected ? 'rgba(58,140,110,0.05)' : zebra && ri % 2 === 1 ? 'var(--surface-content-alt)' : 'var(--surface-content)';
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '7px 0 7px 12px',
        borderBottom: 'var(--border-subtle-solid)',
        width: 36
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: selected,
      onChange: e => {
        e.stopPropagation();
        onToggleRow && onToggleRow(row.id);
      },
      onClick: e => e.stopPropagation(),
      style: {
        accentColor: 'var(--color-accent)',
        cursor: 'pointer'
      }
    })), columns.map(col => /*#__PURE__*/React.createElement("td", {
      key: col.key,
      style: {
        padding: '7px 12px',
        borderBottom: 'var(--border-subtle-solid)',
        textAlign: col.numeric || col.align === 'right' ? 'right' : col.align || 'left',
        fontFamily: col.numeric ? 'var(--font-numeric)' : 'var(--font-ui)',
        fontFeatureSettings: col.numeric ? 'var(--font-feature-numeric)' : 'normal',
        color: active && col.key === columns[0].key ? 'var(--text-accent)' : 'inherit',
        fontWeight: active && col.key === columns[0].key ? 'var(--weight-medium)' : 'inherit',
        whiteSpace: 'nowrap'
      }
    }, col.render ? col.render(row) : row[col.key])));
  })));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MoneyCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — MoneyCell
 * Right-aligned tabular-numeral peso amount. Negative values render in danger.
 */
function MoneyCell({
  value = 0,
  currency = '₱',
  muted = false,
  style = {},
  ...rest
}) {
  const negative = value < 0;
  const formatted = Math.abs(value).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-numeric)',
      fontFeatureSettings: 'var(--font-feature-numeric)',
      fontSize: 'var(--text-table)',
      color: negative ? 'var(--danger)' : muted ? 'var(--text-muted)' : 'var(--text-primary)',
      textAlign: 'right',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), negative ? '−' : '', currency, formatted);
}
Object.assign(__ds_scope, { MoneyCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MoneyCell.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Dialog
 * Centered modal over a scrim. Header / body / footer slots.
 */
function Dialog({
  open = true,
  title = null,
  onClose = null,
  footer = null,
  width = 460,
  children,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(26,42,26,0.38)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1000
    },
    onClick: onClose || undefined
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-content)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px var(--space-6)',
      borderBottom: 'var(--border-subtle-solid)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      fontSize: 'var(--text-table)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: '12px var(--space-6)',
      borderTop: 'var(--border-subtle-solid)',
      background: 'var(--surface-content-alt)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — StatusBadge
 * Signature payroll status system. Each status is distinguished by GEOMETRY +
 * ICON + COLOR, never color alone:
 *   finalized → neon-green circular PILL + check    (locked, no edits)
 *   open      → amber SOFT-RECT + clock             (active, edits in progress)
 *   draft     → gray FLAT-RECT + pencil             (not started)
 */
function StatusBadge({
  status = 'draft',
  children,
  style = {},
  ...rest
}) {
  const config = {
    finalized: {
      bg: 'var(--status-finalized-bg)',
      color: 'var(--status-finalized-text)',
      radius: 'var(--badge-radius-pill)',
      border: 'none',
      icon: 'bi-check-circle-fill',
      label: 'Finalized'
    },
    open: {
      bg: 'var(--status-open-bg)',
      color: 'var(--status-open-text)',
      radius: 'var(--badge-radius-soft)',
      border: '0.5px solid var(--status-open-border)',
      icon: 'bi-clock',
      label: 'Open'
    },
    draft: {
      bg: 'var(--status-draft-bg)',
      color: 'var(--status-draft-text)',
      radius: 'var(--badge-radius-flat)',
      border: 'none',
      icon: 'bi-pencil',
      label: 'Draft'
    }
  }[status] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: config.bg,
      color: config.color,
      border: config.border,
      borderRadius: config.radius,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      padding: '2px 6px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi ${config.icon}`,
    style: {
      fontSize: 10
    }
  }), children || config.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Toast
 * Inline notification using system colors (success/warning/danger/info).
 * NOT used for payroll status — those use StatusBadge.
 */
function Toast({
  variant = 'info',
  title = null,
  onClose = null,
  children,
  style = {},
  ...rest
}) {
  const config = {
    success: {
      color: 'var(--success)',
      icon: 'bi-check-circle-fill',
      tint: 'rgba(30,140,56,0.08)'
    },
    warning: {
      color: 'var(--warning)',
      icon: 'bi-exclamation-triangle-fill',
      tint: 'rgba(232,160,32,0.10)'
    },
    danger: {
      color: 'var(--danger)',
      icon: 'bi-x-circle-fill',
      tint: 'rgba(214,59,59,0.08)'
    },
    info: {
      color: 'var(--info)',
      icon: 'bi-info-circle-fill',
      tint: 'rgba(42,122,181,0.08)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      background: 'var(--surface-content)',
      border: 'var(--border-solid)',
      borderLeft: `3px solid ${config.color}`,
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-md)',
      padding: '10px 12px',
      minWidth: 280,
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bi ${config.icon}`,
    style: {
      color: config.color,
      fontSize: 16,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: title ? 2 : 0
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      padding: 0,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-x-lg"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Checkbox
 * Controlled checkbox with sage fill when checked.
 */
function Checkbox({
  checked = false,
  onChange,
  label = null,
  disabled = false,
  indeterminate = false,
  style = {},
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flex: '0 0 16px',
      borderRadius: 'var(--radius-sm)',
      border: on ? '1px solid var(--color-accent)' : '1px solid var(--border-default)',
      background: on ? 'var(--color-accent)' : 'var(--surface-content)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      transition: 'background var(--transition-fast), border-color var(--transition-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("i", {
    className: "bi bi-dash"
  }) : checked && /*#__PURE__*/React.createElement("i", {
    className: "bi bi-check"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Input
 * Text/number field with optional label, prefix (e.g. ₱), and error state.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  prefix = null,
  suffix = null,
  numeric = false,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: disabled ? 'var(--gray-50)' : 'var(--surface-content)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0 0 10px',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-table)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '6px 10px',
      fontFamily: numeric ? 'var(--font-numeric)' : 'var(--font-ui)',
      fontFeatureSettings: numeric ? 'var(--font-feature-numeric)' : 'normal',
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)',
      textAlign: numeric ? 'right' : 'left',
      minWidth: 0,
      ...style
    },
    onFocus: e => {
      const wrap = e.currentTarget.parentElement;
      wrap.style.borderColor = error ? 'var(--danger)' : 'var(--color-accent)';
      wrap.style.boxShadow = 'var(--focus-ring)';
    },
    onBlur: e => {
      const wrap = e.currentTarget.parentElement;
      wrap.style.borderColor = borderColor;
      wrap.style.boxShadow = 'none';
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 10px 0 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-table)'
    }
  }, suffix)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Select
 * Native dropdown styled to match the input system.
 */
function Select({
  label = null,
  hint = null,
  error = null,
  options = [],
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      background: disabled ? 'var(--gray-50)' : 'var(--surface-content)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '6px 30px 6px 10px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-accent)';
      e.currentTarget.style.boxShadow = 'var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), options.map(opt => {
    const value = typeof opt === 'string' ? opt : opt.value;
    const labelText = typeof opt === 'string' ? opt : opt.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down",
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Switch
 * Toggle for binary settings. Sage track when on.
 */
function Switch({
  checked = false,
  onChange,
  label = null,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontSize: 'var(--text-table)',
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      if (disabled) return;
      e.preventDefault();
      onChange && onChange(!checked);
    },
    style: {
      width: 34,
      height: 20,
      flex: '0 0 34px',
      borderRadius: 99,
      background: checked ? 'var(--color-accent)' : 'var(--gray-300)',
      position: 'relative',
      transition: 'background var(--transition)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 16 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--transition)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — SidebarNav
 * Light sidebar with grouped nav sections and active sage indicator.
 * Pass `sections`: [{ label, items: [{ id, label, icon, count }] }]
 */
function SidebarNav({
  sections = [],
  activeId = null,
  onSelect = null,
  brand = 'MJBJ Payroll',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: 'var(--sidebar-width)',
      flex: '0 0 var(--sidebar-width)',
      background: 'var(--surface-canvas)',
      borderRight: 'var(--border-solid)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "M"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, brand)), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '4px 8px 16px',
      flex: 1
    }
  }, sections.map((section, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      marginBottom: 10
    }
  }, section.label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '8px 8px 2px'
    }
  }, section.label), section.items.map(item => {
    const active = item.id === activeId;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onSelect && onSelect(item.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        fontSize: 'var(--text-sm)',
        color: active ? 'var(--text-accent)' : 'var(--text-secondary)',
        fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
        background: active ? 'var(--nav-item-active-bg, var(--color-accent-subtle))' : 'transparent',
        borderLeft: active ? '3px solid var(--color-accent)' : '3px solid transparent',
        borderRadius: '0 var(--radius-md) var(--radius-md) 0',
        padding: '6px 8px',
        marginBottom: 1,
        textDecoration: 'none',
        transition: 'background var(--transition-fast)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'rgba(58,140,110,0.07)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, item.icon && /*#__PURE__*/React.createElement("i", {
      className: `bi ${item.icon}`,
      style: {
        fontSize: 14,
        width: 16
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontFamily: 'var(--font-numeric)',
        color: active ? 'var(--text-accent)' : 'var(--text-muted)',
        background: active ? 'var(--color-accent-border)' : 'var(--gray-200)',
        borderRadius: 99,
        padding: '1px 6px',
        fontWeight: 600
      }
    }, item.count));
  })))));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Tabs
 * Underline tabs with a sage active indicator. Pass `tabs`: [{id,label,count?}]
 */
function Tabs({
  tabs = [],
  activeId = null,
  onSelect = null,
  style = {},
  ...rest
}) {
  const active = activeId ?? (tabs[0] && tabs[0].id);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 2,
      borderBottom: 'var(--border-solid)',
      ...style
    }
  }, rest), tabs.map(tab => {
    const isActive = tab.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => onSelect && onSelect(tab.id),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-table)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
        padding: '8px 12px 9px',
        borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
        marginBottom: -1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'color var(--transition-fast)'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontFamily: 'var(--font-numeric)',
        fontWeight: 600,
        color: isActive ? 'var(--text-accent)' : 'var(--text-muted)',
        background: isActive ? 'var(--color-accent-border)' : 'var(--gray-200)',
        borderRadius: 99,
        padding: '1px 6px'
      }
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MJBJ Payroll — Topbar
 * App header strip: breadcrumb/title on the left, search + actions on the right.
 */
function Topbar({
  title = null,
  breadcrumb = [],
  search = false,
  actions = null,
  user = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 'var(--topbar-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '0 var(--space-6)',
      background: 'var(--surface-content)',
      borderBottom: 'var(--border-solid)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, breadcrumb.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginBottom: 1
    }
  }, breadcrumb.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-right",
    style: {
      fontSize: 8
    }
  }), /*#__PURE__*/React.createElement("span", null, b)))), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)',
      lineHeight: 1.2
    }
  }, title)), search && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--surface-canvas)',
      border: 'var(--border-solid)',
      borderRadius: 'var(--radius-md)',
      padding: '5px 10px',
      minWidth: 200,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-search",
    style: {
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search workers, periods\u2026",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      flex: 1,
      minWidth: 0
    }
  })), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, actions), user);
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/payroll/AppShell.jsx
try { (() => {
// MJBJ Payroll — App shell (sidebar + topbar + content slot)
function AppShell({
  view,
  setView,
  breadcrumb,
  title,
  actions,
  children
}) {
  const {
    SidebarNav,
    Topbar,
    Avatar,
    Button
  } = window.MJBJPayrollDesignSystem_25cef1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    activeId: view,
    onSelect: setView,
    sections: [{
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'bi-grid-1x2'
      }]
    }, {
      label: 'Payroll',
      items: [{
        id: 'periods',
        label: 'Pay periods',
        icon: 'bi-calendar3',
        count: 3
      }, {
        id: 'register',
        label: 'Payroll register',
        icon: 'bi-table'
      }, {
        id: 'workers',
        label: 'Workers',
        icon: 'bi-people',
        count: 14
      }, {
        id: 'payslips',
        label: 'Payslips',
        icon: 'bi-receipt'
      }]
    }, {
      label: 'Setup',
      items: [{
        id: 'farms',
        label: 'Farms',
        icon: 'bi-house'
      }, {
        id: 'rates',
        label: 'Rates',
        icon: 'bi-cash-stack'
      }, {
        id: 'settings',
        label: 'Settings',
        icon: 'bi-gear'
      }]
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    breadcrumb: breadcrumb,
    title: title,
    search: true,
    actions: actions,
    user: /*#__PURE__*/React.createElement(Avatar, {
      name: "Admin User",
      size: "sm"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, children))));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/payroll/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/payroll/DashboardScreen.jsx
try { (() => {
// MJBJ Payroll — Dashboard screen
function DashboardScreen({
  goTo
}) {
  const {
    Card,
    StatusBadge,
    MoneyCell,
    Button,
    DataTable
  } = window.MJBJPayrollDesignSystem_25cef1;
  const D = window.MJBJ_DATA;
  const Stat = ({
    label,
    value,
    sub,
    icon
  }) => /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--text-primary)',
      marginTop: 6
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent-subtle)',
      color: 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi ${icon}`,
    style: {
      fontSize: 16
    }
  }))));
  const recent = D.periods.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Open periods",
    value: "3",
    sub: "across 3 farms",
    icon: "bi-calendar3"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Workers",
    value: "29",
    sub: "active this month",
    icon: "bi-people"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "May payroll",
    value: "\u20B1210,600",
    sub: "gross, all farms",
    icon: "bi-cash-stack"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "To finalize",
    value: "2",
    sub: "periods awaiting review",
    icon: "bi-hourglass-split"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent pay periods",
    subtitle: "Latest activity across farms",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => goTo('periods')
    }, "View all"),
    padding: false
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: () => goTo('register'),
    columns: [{
      key: 'farm',
      label: 'Farm'
    }, {
      key: 'label',
      label: 'Period'
    }, {
      key: 'range',
      label: 'Date range'
    }, {
      key: 'workers',
      label: 'Workers',
      numeric: true,
      width: 90
    }, {
      key: 'gross',
      label: 'Gross',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.gross,
        muted: r.gross === 0
      })
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }],
    rows: recent
  })));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/payroll/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/payroll/PayPeriodsScreen.jsx
try { (() => {
// MJBJ Payroll — Pay periods list screen (filterable)
function PayPeriodsScreen({
  goTo
}) {
  const {
    Card,
    Tabs,
    Select,
    Button,
    IconButton,
    DataTable,
    MoneyCell,
    StatusBadge
  } = window.MJBJPayrollDesignSystem_25cef1;
  const D = window.MJBJ_DATA;
  const [tab, setTab] = React.useState('all');
  const [farm, setFarm] = React.useState('All farms');
  let rows = D.periods;
  if (tab !== 'all') rows = rows.filter(p => p.status === tab);
  if (farm !== 'All farms') rows = rows.filter(p => p.farm === farm);
  const counts = {
    all: D.periods.length,
    open: D.periods.filter(p => p.status === 'open').length,
    finalized: D.periods.filter(p => p.status === 'finalized').length,
    draft: D.periods.filter(p => p.status === 'draft').length
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeId: tab,
    onSelect: setTab,
    tabs: [{
      id: 'all',
      label: 'All',
      count: counts.all
    }, {
      id: 'open',
      label: 'Open',
      count: counts.open
    }, {
      id: 'finalized',
      label: 'Finalized',
      count: counts.finalized
    }, {
      id: 'draft',
      label: 'Draft',
      count: counts.draft
    }],
    style: {
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: farm,
    onChange: e => setFarm(e.target.value),
    options: ['All farms', ...D.farms],
    style: {
      minWidth: 130
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: "Filter"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-funnel"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-solid)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: () => goTo('register'),
    columns: [{
      key: 'farm',
      label: 'Farm'
    }, {
      key: 'label',
      label: 'Period'
    }, {
      key: 'range',
      label: 'Date range'
    }, {
      key: 'workers',
      label: 'Workers',
      numeric: true,
      width: 90
    }, {
      key: 'gross',
      label: 'Gross',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.gross,
        muted: r.gross === 0
      })
    }, {
      key: 'net',
      label: 'Net pay',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.net,
        muted: r.net === 0
      })
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }, {
      key: 'go',
      label: '',
      width: 40,
      render: () => /*#__PURE__*/React.createElement("i", {
        className: "bi bi-chevron-right",
        style: {
          color: 'var(--text-muted)',
          fontSize: 12
        }
      })
    }],
    rows: rows
  })), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-table)'
    }
  }, "No periods match this filter."));
}
window.PayPeriodsScreen = PayPeriodsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/payroll/PayPeriodsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/payroll/PayrollRegisterScreen.jsx
try { (() => {
// MJBJ Payroll — Payroll register screen (period detail with worker rows)
function PayrollRegisterScreen({
  goTo,
  onToast
}) {
  const {
    Card,
    Button,
    IconButton,
    DataTable,
    MoneyCell,
    StatusBadge,
    Dialog,
    Avatar,
    Checkbox
  } = window.MJBJPayrollDesignSystem_25cef1;
  const D = window.MJBJ_DATA;
  const [sel, setSel] = React.useState([]);
  const [confirm, setConfirm] = React.useState(false);
  const [thirteenth, setThirteenth] = React.useState(false);
  const workers = D.workers;
  const toggle = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const toggleAll = next => setSel(next ? workers.map(w => w.id) : []);
  const totals = workers.reduce((a, w) => ({
    gross: a.gross + w.gross,
    ded: a.ded + w.deductions,
    net: a.net + w.net
  }), {
    gross: 0,
    ded: 0,
    net: 0
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "open"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "Farm A \xB7 May 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "May 1 \u2013 31, 2025 \xB7 14 workers")))), [['Gross', totals.gross], ['Deductions', totals.ded], ['Net pay', totals.net]].map(([label, val]) => /*#__PURE__*/React.createElement(Card, {
    key: label,
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(MoneyCell, {
    value: val,
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: false,
    title: "Payroll register",
    subtitle: `${workers.length} workers · ${sel.length} selected`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "bi bi-download"
      })
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      disabled: sel.length === 0
    }, "Mark paid"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "bi bi-lock"
      }),
      onClick: () => setConfirm(true)
    }, "Finalize period"))
  }, /*#__PURE__*/React.createElement(DataTable, {
    selectable: true,
    selectedIds: sel,
    onToggleRow: toggle,
    onToggleAll: toggleAll,
    columns: [{
      key: 'name',
      label: 'Worker',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)'
        }
      }, r.role)))
    }, {
      key: 'rate',
      label: 'Rate',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.rate
      })
    }, {
      key: 'days',
      label: 'Days',
      numeric: true,
      width: 64
    }, {
      key: 'ot',
      label: 'OT hrs',
      numeric: true,
      width: 70
    }, {
      key: 'gross',
      label: 'Gross',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.gross,
        muted: r.gross === 0
      })
    }, {
      key: 'deductions',
      label: 'Deductions',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: -r.deductions,
        muted: r.deductions === 0
      })
    }, {
      key: 'net',
      label: 'Net pay',
      numeric: true,
      render: r => /*#__PURE__*/React.createElement(MoneyCell, {
        value: r.net,
        muted: r.net === 0
      })
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }, {
      key: 'act',
      label: '',
      width: 40,
      render: () => /*#__PURE__*/React.createElement(IconButton, {
        size: "sm",
        ariaLabel: "Edit"
      }, /*#__PURE__*/React.createElement("i", {
        className: "bi bi-pencil"
      }))
    }],
    rows: workers
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Finalize Farm A \xB7 May 2025?",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setConfirm(false);
        onToast && onToast();
      }
    }, "Finalize period"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px'
    }
  }, "Once finalized, all 14 payslips lock and can no longer be edited. Gross payroll for this period is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "\u20B1", totals.gross.toLocaleString('en-PH'), ".00"), "."), /*#__PURE__*/React.createElement(Checkbox, {
    checked: thirteenth,
    onChange: e => setThirteenth(e.target.checked),
    label: "Also accrue 13th-month pay for this period"
  })));
}
window.PayrollRegisterScreen = PayrollRegisterScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/payroll/PayrollRegisterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/payroll/data.js
try { (() => {
// MJBJ Payroll — UI kit demo data (fictional farm payroll, Philippine context)
window.MJBJ_DATA = {
  farms: ['Farm A', 'Farm B', 'Farm C'],
  periods: [{
    id: 'p-2505',
    farm: 'Farm A',
    label: 'May 2025',
    range: 'May 1 – 31, 2025',
    workers: 14,
    gross: 128400,
    net: 109820,
    status: 'open'
  }, {
    id: 'p-2504',
    farm: 'Farm A',
    label: 'Apr 2025',
    range: 'Apr 1 – 30, 2025',
    workers: 14,
    gross: 121950,
    net: 104300,
    status: 'finalized'
  }, {
    id: 'p-2503',
    farm: 'Farm A',
    label: 'Mar 2025',
    range: 'Mar 1 – 31, 2025',
    workers: 13,
    gross: 118200,
    net: 101040,
    status: 'finalized'
  }, {
    id: 'p-2505b',
    farm: 'Farm B',
    label: 'May 2025',
    range: 'May 1 – 31, 2025',
    workers: 9,
    gross: 0,
    net: 0,
    status: 'draft'
  }, {
    id: 'p-2504b',
    farm: 'Farm B',
    label: 'Apr 2025',
    range: 'Apr 1 – 30, 2025',
    workers: 9,
    gross: 79200,
    net: 68450,
    status: 'finalized'
  }, {
    id: 'p-2505c',
    farm: 'Farm C',
    label: 'May 2025',
    range: 'May 1 – 31, 2025',
    workers: 6,
    gross: 41100,
    net: 35600,
    status: 'open'
  }],
  // workers for the active period (Farm A · May 2025)
  workers: [{
    id: 'w1',
    name: 'Santos, Maria',
    role: 'Harvester',
    rate: 450,
    days: 22,
    ot: 6,
    gross: 9990,
    deductions: 1700,
    net: 8290,
    status: 'open'
  }, {
    id: 'w2',
    name: 'dela Cruz, Juan',
    role: 'Field hand',
    rate: 450,
    days: 20,
    ot: 4,
    gross: 9180,
    deductions: 1350,
    net: 7830,
    status: 'open'
  }, {
    id: 'w3',
    name: 'Reyes, Pedro',
    role: 'Irrigator',
    rate: 480,
    days: 18,
    ot: 0,
    gross: 8640,
    deductions: 1120,
    net: 7520,
    status: 'open'
  }, {
    id: 'w4',
    name: 'Bautista, Ana',
    role: 'Harvester',
    rate: 450,
    days: 21,
    ot: 2,
    gross: 9495,
    deductions: 1500,
    net: 7995,
    status: 'finalized'
  }, {
    id: 'w5',
    name: 'Mendoza, Carlo',
    role: 'Driver',
    rate: 520,
    days: 22,
    ot: 8,
    gross: 12480,
    deductions: 2050,
    net: 10430,
    status: 'finalized'
  }, {
    id: 'w6',
    name: 'Villanueva, Rosa',
    role: 'Sorter',
    rate: 430,
    days: 19,
    ot: 0,
    gross: 8170,
    deductions: 1080,
    net: 7090,
    status: 'open'
  }, {
    id: 'w7',
    name: 'Aquino, Miguel',
    role: 'Field hand',
    rate: 450,
    days: 0,
    ot: 0,
    gross: 0,
    deductions: 0,
    net: 0,
    status: 'draft'
  }, {
    id: 'w8',
    name: 'Gonzales, Liza',
    role: 'Harvester',
    rate: 450,
    days: 23,
    ot: 5,
    gross: 10575,
    deductions: 1820,
    net: 8755,
    status: 'open'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/payroll/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MoneyCell = __ds_scope.MoneyCell;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Topbar = __ds_scope.Topbar;

})();
