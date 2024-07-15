import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // 背景色をrgba(0, 0, 0, 0.75)に設定
        backdropFilter: 'blur(10px)' // ぼかし効果を追加
      }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: '2xl', padding: '16px', maxHeight: '100%' }}>
        <div style={{ position: 'relative', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>Post Detail</h3>
            <button
              type="button"
              style={{ color: '#718096', backgroundColor: 'transparent', borderRadius: '0.25rem', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={onClose}
            >
              <svg
                style={{ width: '0.75rem', height: '0.75rem' }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div style={{ padding: '16px' }}>{children}</div>
        </div>
      </div>
    </div>
  );
};
