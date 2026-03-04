function Food(){
    const Food1 = "Pizza";
    const Food2 = "Spaghetti";
    const Food3 = "Sushi";
    return(
        <div>
            <h2>My favorite foods!</h2>
            <ul>
                <li>Orange Juice</li>
                <li>{Food1}</li>
                <li>{Food2}</li>
                <li>{Food3}</li>
            </ul>
        </div>
    );
}

export default Food