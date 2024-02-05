const Title = ({ level, className, style, children }) => {
  const Tag = `h${level || 1}`;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Title;
