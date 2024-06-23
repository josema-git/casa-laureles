export default function Modal({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const handleClick = () => {
    const child = document.querySelector("#modal");

    if (!child) return;

    child.classList.add("close-modal");

    setTimeout(() => {
      onClick();
    }, 200);
  };

  return (
    <aside className="modal" onClick={handleClick}>
      <section
        id="modal"
        className="open-modal"
        style={{ position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span onClick={handleClick} className="close-modal-button">
          X
        </span>
        {children}
      </section>
    </aside>
  );
}
