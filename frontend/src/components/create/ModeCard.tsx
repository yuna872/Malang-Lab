import Lock from '../common/Lock';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  mode: {
    id: string;
    title: string;
    desc: string;
  };
  selectedMode: string;
  handleClickMode: (id: string) => void;
};

export default function ModeCard({
  mode,
  handleClickMode,
  selectedMode,
}: Props) {
  return (
    <div
      className={`relative rounded-md p-5 hover:bg-black hover:text-white hover:scale-[1.01] hover:button-shadow ${
        selectedMode === mode.id ? 'text-white bg-black' : 'bg-white text-black'
      } ${mode.id === 'TEAM' ? 'pointer-events-none' : ''}`}
      onClick={() => handleClickMode(mode.id)}
    >
      <CheckCircleIcon
        className={`w-6 text-white absolute top-2 left-2 ${
          selectedMode === mode.id ? '' : 'hidden'
        }`}
      />
      {mode.id === 'TEAM' && <Lock />}
      <span className="my-2">
        <div className="w-[80%] m-auto">
          <p className="font-semibold text-lg mb-2">{mode.title}</p>
          <p className="text-xs">{mode.desc}</p>
        </div>
      </span>
    </div>
  );
}
