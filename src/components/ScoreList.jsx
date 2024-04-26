import { Card, List, ListItem } from "@tremor/react";
const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Lucerne",
    rating: "1 open PR",
  },
  {
    city: "Zurich",
    rating: "0 open PR",
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Lissbon",
    rating: "0 open PR",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Tremor's Hometowns
      </h3>
      <List className="mt-2">
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;
