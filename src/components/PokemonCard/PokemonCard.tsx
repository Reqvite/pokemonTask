interface PokemonCardProps {
  src?: string;
  name?: string;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { src, name } = props;
  return (
    <li className="relative flex w-96 flex-col rounded-xl bg-gray-800 bg-clip-border text-white shadow-md">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-gray-800 bg-clip-border  shadow-lg">
        <img src={src} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-center">
        <h4 className=" tmb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
      </div>
    </li>
  );
};
