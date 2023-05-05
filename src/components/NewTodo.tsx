import { useRef, useContext } from 'react';
import classes from "./NewTodo.module.css";
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {     // void as it returns nothing but take string as argument
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);  // as we can use ref any in html element in form so we have to specify here in which html element we are using ref

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;