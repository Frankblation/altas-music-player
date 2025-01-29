
interface CoverArtProps {
  coverImageUrl?: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ coverImageUrl }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-black">
      <img src={coverImageUrl} alt="Album Cover" className="max-w-full max-h-full object-cover" />
    </div>
  );
}

export default CoverArt;
