import {useEffect, useState} from 'react';
interface TumblersFilterProps {
  onTagsChange: (tags: string[]) => void;
}
const TumblersFilter: React.FC<TumblersFilterProps> = ({ onTagsChange }) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const tags = [
    { id: 'stainless-steel', label: 'Cочинение' },
    { id: 'insulated', label: 'Реферат' },
    { id: '16oz', label: 'Курсовой' },
    { id: 'travel', label: 'Доклад' },
  ];

  const toggleTag = (tag: string) => {
    setActiveTags((prevTags) =>
        prevTags.includes(tag)
            ? prevTags.filter((t) => t !== tag)
            : [...prevTags, tag]
    );
  };
  // Notify parent component whenever activeTags changes
  useEffect(() => {
    onTagsChange(activeTags);
  }, [activeTags, onTagsChange]);
  return (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
              <button
                  type={'button'}
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`tag-filter px-4 py-2 rounded-full ${
                      activeTags.includes(tag.id)
                          ? 'bg-gray-400 text-white'
                          : 'bg-gray-200 text-gray-800'
                  }`}
              >
                {tag.label}
              </button>
          ))}
        </div>
  );
};

export default TumblersFilter;
