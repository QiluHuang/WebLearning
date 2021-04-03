function CatFactsDetails({ facts }) {
    const formattedFacts = facts.map( fact => (<li>{fact}</li>));
    return (
        <ul>
            {formattedFacts}
        </ul>
    );
}

export default CatFactsDetails;