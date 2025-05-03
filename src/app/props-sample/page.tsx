'use client'; // クライアントコンポーネント宣言！

type HelloProps = {
  name: string;
};

function Hello({ name }: HelloProps) {
  return <p className="text-xl">こんにちは、{name}さん！</p>;
}

export default function PropsSamplePage() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl mb-4">Props練習</h1>
      <Hello name="太郎" />
      <Hello name="花子" />
    </div>
  );
}

