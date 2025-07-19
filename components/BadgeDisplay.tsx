type BadgeDisplayProps = {
  badgePaths: string[];
  altTexts?: string[];
};

export function BadgeDisplay({ badgePaths, altTexts = [] }: BadgeDisplayProps) {
  return (
    <div className="flex flex-col items-end ml-4 space-y-1 w-20 sm:w-20 xs:w-16 flex-shrink-0">
      {badgePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={altTexts[index] || 'Hackathon badge'}
          title={altTexts[index] || ''}
          className="w-20 h-20 object-cover block sm:h-20 xs:w-16 xs:h-16 rounded"
        />
      ))}
    </div>
  );
}
