export interface CardProps{
  id: string;
  imageLink: string;
}

function Card(props: CardProps) {
  return (
    <a className="relative w-295 h-165" href={props.imageLink}>

    </a>
  );
}

export default Card;
