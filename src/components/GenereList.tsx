import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import { Image } from "@chakra-ui/react";

const GenereList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
