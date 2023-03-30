import Card, { CardProps } from "./Card";

export interface CardListProps{
  cardList: CardProps[];
  name: string;
}

function CardList(props: CardListProps) {
  const cardList = props.cardList.map( cardProps => {
    return (
        <Card
          imageLink={cardProps.imageLink}
          id={cardProps.id}
        />
  )});
  return (
    <div className="w-[3vw]">
        <h2 className="text-[1.4vw] leading-[1.15vw] align-bottom">
          {props.name}
        </h2>
        {cardList}
    </div>
  )
}

export default CardList;
