import CardComponent from '../../components/card/CardComponent'
const todos = [
    {
        id: 1,
        title: 'Tarefa 1',
        description: 'yhskahkjhksjdhakjhdjkh',
        status: false,
    },
    {
        id: 2,
        title: 'Tarefa 2',
        description: 'yhskahkjhksjdhakjhdjkh',
        status: true,
    },
]

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