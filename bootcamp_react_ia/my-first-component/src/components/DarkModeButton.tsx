export function DarkModeButton() {

    function handleClick() {
        alert("Dark mode button clicked!");
    }

    return (
        <button className="button" onClick={handleClick}>
            🌙
        </button>
    );
}
