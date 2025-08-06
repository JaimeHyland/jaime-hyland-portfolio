type BadgeDisplayProps = {
  badgePaths: string[];
  altTexts?: string[];
};

export function BadgeDisplay({ badgePaths, altTexts = [] }: BadgeDisplayProps) {
  return (
    <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0 space-y-1 w-16 sm:w-20 flex-shrink-0">
      {badgePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={altTexts[index] || "Hackathon badge"}
          title={altTexts[index] || ""}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover block bg-white border border-gray-300 rounded"
        />
      ))}
    </div>
  );
}
