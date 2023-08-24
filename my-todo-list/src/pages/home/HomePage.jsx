import CardComponent from '../../components/card/CardComponent'


export const HomePage = () => {
    return (
        <div className="HomeContainer">
            <div className="CardsContainer">
                {todos.map(todo => 
                    <CardComponent todo={todo} key={todo.id} />
                )}
            </div>
        </div>
    )
}