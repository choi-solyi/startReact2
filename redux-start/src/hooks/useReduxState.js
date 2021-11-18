import { useContext, useState, useEffect } from "react";
import ReduxContext from "../contexts/ReduxContext";

export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState);

  useEffect(() => {
    const undsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      undsubscribe();
    };
  }, [store]);

  return state;
}
