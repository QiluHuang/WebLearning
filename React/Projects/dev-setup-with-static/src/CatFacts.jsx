import { useState, useEffect } from 'react';
import { fetchCats } from './services';
import CatFactsDetails from './CatFactsDetails';

const fruits = ["apple", "banana", "orange"];

function CatFacts() {
    const [catFacts, setCatFacts] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        fetchCats()
        .then( (facts) => {
            setCatFacts(facts);
            setIsLoading(false);
            console.log(typeof(facts));
            console.log("catFacts " + typeof(catFacts))
            console.log("fruit " + typeof(fruits));
        })
        .catch( err => {
            console.log(err);
        })
    }, []); // 加array可以阻止不断增加

    return (
        <div>
            { isLoading ? "loading..." : null }
            {fruits}
            {catFacts}
            <CatFactsDetails facts={fruits}/>
        </div>
    );
}

export default CatFacts;