'use client';

import GameModeItem from '@/components/main/GameModeItem';
import { useEffect } from 'react';
import { getTokenApi } from '@/apis/apis';
import BgAudioPlayer from '@/components/common/BgAudioPlayer';

export interface Mode {
  name: string;
  image: string;
  path: string;
}

const modes = [
  { name: '방 만들기', image: '', path: 'create' },
  { name: '참여하기', image: '', path: 'join' },
  { name: '혼자하기', image: '', path: '' },
];

export default function MainPage() {
  useEffect(() => {
    console.log('first enter');
    const res = getTokenApi();
  }, []);
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-center flex justify-center align-middle"
      style={{ backgroundImage: "url('/imgs/bg-2.png')" }}
    >
        {/* <BgAudioPlayer src='/audio/bgfull.wav'/> */}

      <section className="w-[60vw] flex justify-center align-middle m-auto glass py-10">
        <div className="w-[96%] h-[60%] flex flex-col">
          <h1 className="text-center text-4xl font-semibold">말랑연구소</h1>
          <div className="w-full flex justify-between mx-auto my-10">
            {modes.map(mode => (
              <GameModeItem key={mode.path} mode={mode} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
