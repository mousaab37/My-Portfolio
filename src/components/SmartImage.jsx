import React from "react";

/**
 * SmartImage
 * ----------
 * A thin wrapper around <img> that handles performance + a11y defaults:
 *  - `priority` images load eager, decode sync, and signal high fetch priority
 *  - everything else is lazy + async
 *  - `width`/`height` prevent CLS
 *  - `placeholder` (optional) is a tiny LQIP shown until the real image arrives
 *
 * All assets in this project are webp served from /public, so the component
 * only needs a single `src` string. If you later add an AVIF or a srcset,
 * extend this component rather than scattering <img> tags everywhere.
 */
export default function SmartImage({
  src,
  alt,
  width,
  height,
  priority = false,
  placeholder,
  className = "",
  sizes,
  style,
  ...rest
}) {
  const placeholderStyle = placeholder
    ? { backgroundImage: `url(${placeholder})`, backgroundSize: "cover" }
    : undefined;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchpriority={priority ? "high" : "auto"}
      sizes={sizes}
      className={className}
      style={{ ...placeholderStyle, ...style }}
      {...rest}
    />
  );
}
