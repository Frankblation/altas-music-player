// PlayListItem.tsx

interface PlayListItemProps {
  title: string;
  artist: string;
  length: string;
  isSelected: boolean;
  onClick?: () => void;
}

const PlayListItem = ({ title, artist, length, isSelected, onClick }: PlayListItemProps) => {
  return (
    <div
      className={`flex justify-between items-center p-3 ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}`}
      onClick={onClick}
    >
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{artist}</p>
      </div>
      <span className="text-sm text-gray-500">{length}</span>
    </div>
  )
}

export default PlayListItem