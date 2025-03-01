

interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle = ({ title, artist }: SongTitleProps) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-lg text-gray-600">{artist}</p>
    </div>
  );
};

export default SongTitle;

