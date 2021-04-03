import { fetchCount } from './services';
import { useState, useEffect } from 'react';

function Demo() {
    const [count, setCount] = useState();
    const [update, setUpdate] = useState(0);

    
    function changeCount() {
        fetchCount()
        .then( newCount => setCount(newCount) )
        .catch( err => {
            console.warn(err);
        });
    }

    // 让两个功能联动，一起增加
    useEffect( changeCount, [update] );  // 加array可以阻止不断增加

    return (
        <div>
            <div>
                <button onClick={ () => setUpdate(update+1)}>Update</button>
                {update}
            </div>
            <div>
                <button onClick={changeCount}>Count</button>
                {count}
            </div>
        </div>
    );
}

export default Demo;