export default function SwitcherAreaDark({ handleDark }) {
    return (
        <>
            <div class="switcher__area">
                <div class="switcher__icon">
                    <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
                    <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
                </div>

                <div class="switcher__items">
                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">Cursor</h2>
                        </div>
                        <div class="switcher__btn">
                            <select name="cursor-style" id="cursor_style">
                                <option value="1">default</option>
                                <option selected value="2">animated</option>
                            </select>
                        </div>
                    </div>

                    <div class="switcher__item">
                        <div class="switch__title-wrap">
                            <h2 class="switcher__title">mode</h2>
                        </div>
                        <div class="switcher__btn mode-type wc-col-2">
                            <button onClick={() => handleDark(false)} data-mode="light">light</button>
                            <button onClick={() => handleDark(true)} class="active" data-mode="dark">dark</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}