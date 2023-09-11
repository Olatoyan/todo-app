export default function SummaryTexts({ children, onClickedStates, isClicked }) {
  return (
    <p
      className={`states ${children}__states ${
        isClicked ? "clicked__states" : ""
      }`}
      onClick={onClickedStates}
    >
      {children}
    </p>
  );
}
