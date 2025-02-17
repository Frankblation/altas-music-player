interface CoverArtProps {
  cover: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ cover }) => {
  return (
    <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-xlg flex items-center justify-center bg-black">
      <img src={cover} alt="Album Cover" className="max-w-full max-h-full object-cover" />
    </div>
  );
};

export default CoverArt;
