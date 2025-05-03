'use client'; // 最初にこれ絶対書いてね！（App Routerでは必須）

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl mb-4">カウンターアプリ</h1>
      <p className="text-xl">{count}回クリックされました</p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4"
        onClick={() => setCount(count + 1)}
      >
        +1する
      </button>
    </div>
  );
}

