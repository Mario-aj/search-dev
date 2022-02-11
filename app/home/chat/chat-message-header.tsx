import { Avatar } from 'app/components/ui';
import { User } from 'app/types';

type Props = {
  targetUser: User;
};

const ChatMessageHeader = ({ targetUser }: Props) => (
  <div
    title="dev-info"
    aria-label="dev-info"
    className="box-border flex items-center w-full p-4 mb-auto border-b-2 border-gray-400"
  >
    <Avatar
      avatarUrl={targetUser.avatarUrl}
      emptyText={targetUser.name || ''}
    />
    <div className="flex flex-col ml-4">
      <div className="flex items-center ">
        <strong
          title={targetUser.name}
          aria-label="name"
          className="pr-2 mr-2 text-gray-700 border-r border-black"
        >
          {targetUser.name}
        </strong>
        {targetUser.company && <span>works at {targetUser.company}</span>}
      </div>
      {targetUser.bio && (
        <span
          title={targetUser.bio}
          aria-label="bio"
          className="block overflow-hidden text-sm text-gray-400 w-96 whitespace-nowrap text-ellipsis"
        >
          {targetUser.bio}
        </span>
      )}
      {targetUser.location && (
        <span
          title={targetUser.location}
          aria-label="location"
          className="text-sm text-gray-400 "
        >
          Live in {targetUser.location}
        </span>
      )}
    </div>
  </div>
);

export default ChatMessageHeader;
