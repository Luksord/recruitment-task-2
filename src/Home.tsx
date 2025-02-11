import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Logo } from "./assets/logo";
import { Title } from "./components";
import { Button } from "./components/Button";
import { actionCreators } from "./store";
import { RootState } from "./store/reducers";
import "./styles/home.css";

const Home = () => {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { increment, decrement, reset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <Logo height={200} width={200} />
      <div className="counter-container">
        <Button onClick={() => decrement(1)}> - </Button>
        <Title>{state}</Title>
        <Button onClick={() => increment(1)}> + </Button>
      </div>
      <Button onClick={() => reset()}> reset </Button>
    </div>
  );
};

export default Home;
