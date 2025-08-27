type Props = {
  src: string; // e.g. "/video/shadow.mp4"
  poster?: string; // optional: "/images/posters/shadow.jpg"
  className?: string;
  rounded?: boolean;
  controls?: boolean; // default false (autoplay loops)
};

export default function Video({
  src,
  poster,
  className = "",
  rounded = true,
  controls = false,
}: Props) {
  return (
    <video
      className={`${rounded ? "rounded-3xl" : ""} ${className}`}
      autoPlay={!controls}
      muted={!controls} // autoplay on mobile requires muted + playsInline
      loop={!controls}
      playsInline
      preload="metadata"
      poster={poster}
      controls={controls}
    >
      {/* If you later export webm, put it first for better compression */}
      {/* <source src="/video/yourfile.webm" type="video/webm" /> */}
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
