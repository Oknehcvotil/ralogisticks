const Picture = ({ imagePath, altText }) => {
  return (
    <picture>
      <source
        srcSet={`${require(`../../assets/images/${imagePath}.jpg`)} 1x`}
        type="image/jpg"
      />
      <source
        srcSet={`${require(`../../assets/images/${imagePath}@2x.jpg`)} 2x`}
        type="image/jpg"
      />
      <source
        srcSet={`${require(`../../assets/images/${imagePath}.webp`)} 1x`}
        type="image/webp"
      />
      <source
        srcSet={`${require(`../../assets/images/${imagePath}@2x.webp`)} 2x`}
        type="image/webp"
      />
      <img
        src={require(`../../assets/images/${imagePath}.jpg`)}
        alt={altText}
      />
    </picture>
  );
};

export default Picture;
