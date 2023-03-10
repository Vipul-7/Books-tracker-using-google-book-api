import Card from "./UI/Card";
import classes from "./BooksListExplore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/favorite-slice";
import { CurrentReadActions } from "../store/current-read-slice";

const BooksList = (props) => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state) => state.favorite.favBooks);

  const isBookExistInFavorite = favoriteBooks.find(
    (item) => item.id === props.id
  );

  const addToFavoriteHandler = () => {
    dispatch(
      favActions.addToFavorite({
        id: props.id,
        title: props.title,
        authors: props.authors,
        categories: props.categories,
        image: props.image,
        description: props.description,
        language: props.language,
        pages: props.pages,
      })
    );
  };

  const removeFromFavoriteHandler = () => {
    dispatch(favActions.removeFromFavorite(props.id));
  };

  const addToCurrentReadHandler = () => {
    dispatch(
      CurrentReadActions.addToCurrentRead({
        id: props.id,
        title: props.title,
        authors: props.authors,
        categories: props.categories,
        image: props.image,
        Totalpages: props.pages,
      })
    );
  };

  return (
    <div>
      <Card
        id={props.id}
        title={props.title}
        authors={props.authors}
        categories={props.categories}
        image={props.image}
        description={props.description}
        language={props.language}
        pages={props.pages}
      />
      <section className={classes.buttons}>
        {!isBookExistInFavorite && (
          <button onClick={addToFavoriteHandler} type="button">
            Add to Favorite
          </button>
        )}
        {isBookExistInFavorite && (
          <button onClick={removeFromFavoriteHandler} type="button">
            Remove From Favorite
          </button>
        )}
        <button onClick={addToCurrentReadHandler} type="button">
          Reading Now
        </button>
        <button>To read</button>
      </section>
    </div>
  );
};

export default BooksList;
