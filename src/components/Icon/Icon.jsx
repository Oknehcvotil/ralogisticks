import sprite from '../../assets/icons/sprite.svg';

const Icon = ({ iconName, width, height }) => (
  <svg width={width} height={height}>
    <use href={`${sprite}${iconName}`}></use>
  </svg>
);

export default Icon;
