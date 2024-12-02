import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-blue-300 w-fit p-2 rounded">
      <img
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        className="w-20"
      />
      <div className="">
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}