
import React from 'react';
import { CarouselSlide } from '../types';
import { ICON_MAP } from './IconLibrary';
import { QrCode, Coins, Clock } from 'lucide-react';

interface Props {
  slide: CarouselSlide;
  id?: string;
}

const PosterPreview: React.FC<Props> = ({ slide, id }) => {
  const { themeColors } = slide;

  return (
    <div 
      id={id}
      className="poster-preview font-arabic"
      style={{ 
        backgroundColor: themeColors.background,
        color: themeColors.text
      }}
    >
      {/* Dynamic CSS Injection */}
      <style dangerouslySetInnerHTML={{ __html: slide.customCss || '' }} />

      {/* Header with Background and Logos */}
      <div className="poster-header">
        <img 
          src={slide.topImage} 
          alt="Top Header" 
          className="poster-image"
          crossOrigin="anonymous"
        />
        <div 
          className="poster-header-overlay"
          style={{ 
            background: `linear-gradient(to top, ${themeColors.primary} 95%, transparent 100%)`,
            opacity: 0.95
          }}
        ></div>
        
        {/* Logos */}
        <div className="poster-logos">
           <div className="logo-box">
           </div>
           
           {slide.brandLogo ? (
             <div className="logo-box right">
                <img 
                  src={slide.brandLogo} 
                  alt="Brand Logo" 
                  style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                  crossOrigin="anonymous" 
                />
             </div>
           ) : (
             <div className="logo-box right">
                {/* Empty or previous logo if preferred - but user said replace */}
             </div>
           )}
        </div>

        {/* Title Overlay */}
        <div className="poster-title-container">
          <h2 className="poster-title">
            {slide.title}
          </h2>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="poster-content">
        {/* Optional User Logo Floating in corner */}
        {slide.logoImage && (
          <div className="user-logo-container">
             <div className="user-logo-box">
               <img 
                 src={slide.logoImage} 
                 alt="User Logo" 
                 className="user-logo-img"
                 crossOrigin="anonymous"
               />
             </div>
          </div>
        )}

        {/* Description Text */}
        <p 
          className="poster-desc"
          style={{ 
            borderColor: themeColors.secondary,
            color: themeColors.text 
          }}
        >
          {slide.description}
        </p>

        {/* Specializations Section */}
        <div className="poster-specs-section">
          <div className="poster-specs-header">
             <span 
               className="poster-specs-badge"
               style={{ backgroundColor: themeColors.secondary }}
             >
               التخصصات المطلوبة:
             </span>
             <div 
               className="poster-specs-divider"
               style={{ backgroundColor: themeColors.secondary }}
             ></div>
          </div>

          <div className="poster-specs-grid">
            {slide.specializations.map((spec) => (
              <div key={spec.id} className="poster-spec-item">
                <div 
                  className="poster-spec-icon-box"
                  style={{ 
                    backgroundColor: themeColors.background === '#ffffff' ? '#f9fafb' : 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(0,0,0,0.05)',
                    color: themeColors.primary
                  }}
                >
                  {ICON_MAP[spec.icon] || ICON_MAP['other']}
                </div>
                <span 
                  className="poster-spec-name"
                  style={{ color: themeColors.text }}
                >
                  {spec.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Area - 2-column RTL layout */}
      <div 
        className="poster-footer"
        style={{ 
          backgroundColor: themeColors.background === '#ffffff' ? '#f9fafb' : 'rgba(0,0,0,0.1)',
          borderColor: 'rgba(0,0,0,0.05)'
        }}
      >
        {/* Right Column: Duration + Incentives stacked */}
        <div className="footer-right-col">
          {/* 1. Duration */}
          <div className="footer-duration-block" style={{ color: themeColors.primary }}>
            <Clock size={18} />
            <div className="footer-duration-text">
              <span className="footer-duration-label">مدة التدريب:</span>
              <span className="footer-duration-value">{slide.duration}</span>
            </div>
          </div>

          {/* 3. Incentives */}
          <div 
            className="footer-incentives-block"
            style={{ 
              backgroundColor: themeColors.background === '#ffffff' ? 'white' : 'rgba(255,255,255,0.05)',
              borderColor: `${themeColors.secondary}55`,
            }}
          >
            <Coins size={18} style={{ color: themeColors.secondary, flexShrink: 0 }} />
            <p className="footer-incentives-text" style={{ color: themeColors.text }}>
              {slide.incentives}
            </p>
          </div>
        </div>

        {/* Left Column: QR text + QR code stacked */}
        <div className="footer-left-col">
          {/* 2. QR Text */}
          <p className="footer-qr-text" style={{ color: themeColors.text }}>
            {slide.qrCodeText}
          </p>
          {/* 4. QR Code */}
          <div className="footer-qr-box" style={{ borderColor: `${themeColors.primary}33` }}>
            {slide.qrCodeImage ? (
              <img src={slide.qrCodeImage} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <QrCode style={{ color: themeColors.primary, width: '100%', height: '100%' }} strokeWidth={1.2} />
            )}
          </div>
        </div>
      </div>

      {/* Brand Stripe Footer */}
      <div 
        className="poster-brand-footer"
        style={{ 
          backgroundColor: `${themeColors.primary}15`,
          borderTopColor: `${themeColors.primary}22`,
          color: themeColors.text 
        }}
      >
        <span className="right-brand">منصة المستثمر الاقتصادية</span>
        <span className="left-brand">al-investor.com</span>
      </div>
    </div>
  );
};

export default PosterPreview;
