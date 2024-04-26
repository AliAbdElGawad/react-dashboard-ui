import { SalesItem, ScoreList, WebAnalytics } from "../components";
const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
    </div>
  );
};

export default RightColumn;
