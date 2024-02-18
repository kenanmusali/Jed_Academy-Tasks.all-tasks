import BookImage from "../BookImage"
import BookName from "../BookName"
import BookAuthorName from "../BookAuthorName"
import BookPrice from "../BookPrice"

function Book(props) {
    return <>
        <div className="book">
            <BookImage url={props.image}/>
            <BookName name={props.name}/>
            <BookAuthorName author={props.author}/>
            <BookPrice price={props.price}/>
        </div>
    </>
}

export default Book;