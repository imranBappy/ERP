<<<<<<<<< Temporary merge branch 1
const Card = ({ cards }) => {
    return (
        <div className="flex gap-5 flex-wrap justify-between">
            {
                cards.map((card, id) => <div key={id} className="light__component dark:dark__component flex-grow  flex basis-80 justify-between p-5 rounded-md shawdow-md">
=========
import dashboardCard from '../data/dashboardCard';
const Card = () => {
    return (
        <div className="flex gap-5 flex-wrap justify-between">
            {
                dashboardCard.map((card, id) => <div key={id} className="light__component dark:dark__component flex-grow  flex basis-80 justify-between p-5 rounded-md shawdow-md">
>>>>>>>>> Temporary merge branch 2
                    <div className="card__left">
                        <p className='text-gray-500 text-xl  font-semibold mb-1'>{card.title}</p>
                        <p className=' font-bold text-2xl'>{card.value}</p>
                    </div>
                    <div className="card__right">
                        <img width="50" src={card.avater} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;