import Book from './components/Book'

function App() {
    return (
        <>
            <Book
                name="Book 1 name"
                author="Author1"
                price={45}
                image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSJqotSR2XdiaAAFO-tXGyotCIghAyLP6yUd3iUFhHKSutQUDve8hDuKZCYUFpGrafgIZBoi2IycPG-2OoSHdmyjOfwSl8MO85_AHqGts" width={200}
            />
            <hr />
            <Book
                name="Book 2 name"
                author="Author2"
                price={45}
                image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgaQgM3tsDgGMhjinPT498OrQp2m2nJc6jw6nFSyONk5jqH9oO_zf4SkvihmCvDVSMYDwGl0Otrv6moXkNG6WJerLW1gN4geuwO9xXbOqOLkjrGbl1aJzTog" width={200}
            />
            <hr />
        </>
    )
}

export default App