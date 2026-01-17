import { Image } from "expo-image";

type Props = {
  imgSource: string;
};

const ImageViewer = ({ imgSource }: Props) => {
  return (
    <Image
      source={imgSource}
      style={{
        width: 350,
        height: 450,
        borderRadius: 27,
        objectFit: "cover",
      }}
    />
  );
};

export default ImageViewer;
