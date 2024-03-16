import { Badge } from "@chakra-ui/react";
interface Prpps {
  score: number;
}
const CriticScore = ({ score }: Prpps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={1} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
