import useCounter from "../hooks/useCounter";
import Button from "./Button";

const Counter = () => {

    const { increment, decrement, reset, count } = useCounter() ;

    return (
        <main>
            <h1>Contador</h1>
            <div className='count-container'>{count}</div>
            <div>
                <Button onClick={decrement} text="Decrementar" /> 
                <Button onClick={reset} text="Resetear" />
                <Button onClick={increment} text="Incrementar" />
            </div>
        </main>
    );
};

export default Counter;