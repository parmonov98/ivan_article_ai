import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'
import { transliterate } from 'transliteration';

export const maxDuration = 60

export default function Page() {
  const id = generateId()
    const generateIdAndTransliteration = (id: string, phrase: string) => {
        // Transliterate the phrase
        let transliterated = transliterate(phrase);
        // Replace spaces with hyphens
        transliterated = transliterated.replace(/\s+/g, '+');
        return `${id}-${transliterated}`;
    };

    const phrase = "Cочинение в теме Родина";
    const result = generateIdAndTransliteration(id, phrase);
  return (
    <AI initialAIState={{ chatId: result, messages: [] }}>
      <Chat id={id} />
    </AI>
  )
}
