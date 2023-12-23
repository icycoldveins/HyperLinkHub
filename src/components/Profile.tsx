import React from 'react';

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
    </div>
  );
};

export{Profile};