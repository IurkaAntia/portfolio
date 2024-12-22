function ExperienceCard({ customStyle, imageUrl, title, text }) {
  return (
    <div
      className={`${customStyle} bg-white text-black p-8 rounded-lg shadow-md `}
    >
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{text}</p>
    </div>
  );
}

export default ExperienceCard;
