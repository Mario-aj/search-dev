type Props = {
  avatarUrl?: string;
  emptyText: string;
};

const Avatar = ({ avatarUrl, emptyText }: Props) => {
  function reduceName(name: string) {
    const splitName = name.split(' ');

    return (splitName[0][0] + splitName[splitName.length - 1][0]).toUpperCase();
  }

  return (
    <div className="flex items-center justify-center overflow-hidden border-2 border-blue-500 rounded-full cursor-pointer w-14 h-14">
      {avatarUrl ? (
        <img src={avatarUrl} alt="avatar" className="w-full h-full" />
      ) : (
        <span title="emptyText" className="font-bold text-gray-500">
          {reduceName(emptyText)}
        </span>
      )}
    </div>
  );
};

export default Avatar;
