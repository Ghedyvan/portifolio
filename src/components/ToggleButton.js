import "./hamburger.css";

export default function ToggleButton({ setOpen }) {

  function burgerX() {
    const toggleButton = document.querySelector(".hamburger");
    console.log(toggleButton);
    toggleButton.classList.toggle("is-active");
  }

  function handleClick() {
    setOpen((prev) => !prev);
    burgerX();
  }

  return (
    <button className="bg-white hamburger hamburger--collapse text-black top-[25%] right-6 absolute" onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
