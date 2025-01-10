const ItemList = ({ list }) => {

        return(

        <>
        <ul>
            {list.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
        </>
    )
}

export default ItemList