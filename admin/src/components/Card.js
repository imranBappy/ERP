const Card = ({ cards }) => {
    console.log(cards);
    const prefix = 'http://localhost:5000/uploads/'
    return (
        <div className="flex gap-5 flex-wrap justify-between">
            {
                cards.map((card, id) => <div key={id} className="light__component dark:dark__component flex-grow  flex basis-80 justify-between p-5 rounded-md shawdow-md">
                    <div className="card__left">
                        <p className='text-gray-500 text-xl  font-semibold mb-1'>{card.name}</p>
                        <p className=' font-bold text-2xl'>{card.code}</p>
                    </div>
                    <div className="card__right">
                        <img width="50" src={prefix + card.url} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;