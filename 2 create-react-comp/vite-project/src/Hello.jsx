function Hello()
{
    let myName = "James Rumba";
    let fullName = () => {
        return 'james Rumba';
    }

    return (
        <h3>
            Hello this is the future Speaking... {fullName()} 
        </h3>
    );
}

export default Hello;