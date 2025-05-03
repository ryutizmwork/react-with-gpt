'use client'; // クライアントコンポーネント宣言！

import { useState } from 'react';

export default function FormSamplePage() {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl mb-4">フォーム入力制御練習</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded"
        placeholder="ここに文字を入力してね"
      />
      <p className="mt-4 text-xl">入力された文字：{text}</p>
    </div>
  );
}
