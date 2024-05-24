import { useImmer } from "use-immer";
import { RankContext } from "../context/context";

export default function RankProvider(props) {
  const [users, updateUsers] = useImmer([]);
  const [myData, updateMyData] = useImmer(obj);
  const [topRank, updateTopRank] = useImmer([obj, obj, obj]);

  return (
    <RankContext.Provider value={{ topRank, updateTopRank, myData, updateMyData, users, updateUsers }}>
      {props.children}
    </RankContext.Provider>
  );
}

const obj = {
  lank: 0,
  nickname: "",
  count: 0,
  level: 0,
};
