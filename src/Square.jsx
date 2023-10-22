import s from './Square.module.css';

export default function Square({value}) {
    function handleClick(){
        console.log('clicked!');
    }
    return (
        <button 
        className={s.square}
        onClick={handleClick}
        >{value}</button>
    )
}