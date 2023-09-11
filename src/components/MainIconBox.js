export default function MainIconBox({ img, children }) {
  return <img src={img} alt={children} className={children} />;
}
