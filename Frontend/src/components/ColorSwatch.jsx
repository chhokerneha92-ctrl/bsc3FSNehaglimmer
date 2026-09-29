import React from 'react';

export default function ColorSwatch({
  name,
  hex,
  gradient,
  isActive = false,
  size = "md", // sm, md, lg
  onClick,
  showLabel = false
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    hero: "w-20 h-20 md:w-24 md:h-24"
  }[size] || "w-12 h-12";

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
        onClick ? 'active:scale-95' : ''
      }`}
    >
      <div
        className={`relative ${sizeClasses} rounded-full overflow-hidden transition-all duration-300 ${
          isActive
            ? 'ring-2 ring-tertiary-container ring-offset-2 ring-offset-surface scale-110 shadow-lg'
            : 'ring-1 ring-outline-variant/40 hover:scale-105'
        } ${gradient ? `bg-gradient-to-br ${gradient}` : ''}`}
        style={!gradient && hex ? { backgroundColor: hex } : undefined}
      >
        {/* Specular gloss curved reflection */}
        <div className="swatch-gloss" />
        {/* Subtle inner shadow */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3)] pointer-events-none" />
      </div>

      {showLabel && name && (
        <span className={`font-label-sm text-label-sm uppercase tracking-wider text-center transition-colors ${
          isActive ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'
        }`}>
          {name}
        </span>
      )}
    </div>
  );
}
