import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="avatar">
      <Image src={`/images/profile.png`} layout="fill" objectFit="contain" />
    </div>
  );
}
