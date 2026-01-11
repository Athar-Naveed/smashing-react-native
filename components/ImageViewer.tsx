import { Image } from "expo-image";

type Props = {
  imgSource: string;
};

const ImageViewer = ({ imgSource }: Props) => {
  return (
    <Image
      source={imgSource}
      style={{
        width: 320,
        height: 300,
        borderRadius: 27,
        objectFit: "contain",
      }}
    />
  );
};

export default ImageViewer;
