function Photo({ url }) {
  // image component for each picture
  return (
    <li>
      <img src={url} alt="" />
    </li>
  );
}

export default Photo;
