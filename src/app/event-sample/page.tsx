'use client'; // クライアントコンポーネント宣言！

export default function EventSamplePage() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl mb-4">イベントハンドリング練習</h1>
      <button
        className="bg-green-500 text-white py-2 px-6 rounded"
        onClick={handleClick}
      >
        クリックしてね
      </button>
    </div>
  );
}
