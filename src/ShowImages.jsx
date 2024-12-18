export default function ShowImages({ images }) {
  console.log(images);
  const renderedImages = images.map((image) => {
    return <img key={image.id} src={image.urls.small} alt="car" />;
  });
  return <div>{renderedImages}</div>;
}
