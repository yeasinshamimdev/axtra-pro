export default function SwitcherArea({ mode }) {
    return (
        <div className="switcher__area">
            <div className="switcher__icon">
                <button id="switcher_open"><i className="fa-solid fa-gear"></i></button>
                <button id="switcher_close"><i className="fa-solid fa-xmark"></i></button>
            </div>

            <div className="switcher__items">
                <div className="switcher__item">
                    <div className="switch__title-wrap">
                        <h2 className="switcher__title">Cursor</h2>
                    </div>
                    <div className="switcher__btn">
                        <select name="cursor-style" id="cursor_style">
                            <option defaultValue value="2">animated</option>
                            <option value="1">default</option>
                        </select>
                    </div>
                </div>

                <div className="switcher__item">
                    <div className="switch__title-wrap">
                        <h2 className="switcher__title">mode</h2>
                    </div>
                    <div className="switcher__btn mode-type wc-col-2">
                        <button className={mode === "dark" ? "" : "active"} data-mode="light">light</button>
                        <button className={mode === "dark" ? "active" : ""} data-mode="dark">dark</button>
                    </div>
                </div>
            </div>
        </div>
    )
}