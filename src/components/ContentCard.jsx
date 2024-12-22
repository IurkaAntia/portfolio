function ContentCard({ customStyle, imageUrl, title, text }) {
  return (
    <div className="shadow-inner rounded-2xl shadow-gray-400">
      <div className={`${customStyle} text-white font-extrabold p-8 `}>
        <img
          src={imageUrl} // Use imageUrl directly
          alt={title} // Optional alt text for accessibility
          className="mb-4 w-full h-48 object-contain rounded-md" // Add some styles for better presentation
        />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
          {title}
        </h2>
        <p className="mt-4 text-lg">{text}</p>
      </div>
    </div>
  );
}

export default ContentCard;
