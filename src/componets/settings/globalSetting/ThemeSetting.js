export const ThemeSetting = () => {
    return <div>
        <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="zoomcontrol" style={{ color: "black" }}>
                Theme
            </label>
            <div className="col-md-8">
                <ul className="list-unstyled thememenu-sy">
                    <li>
                        <div className="theme-box">
                            <label>
                                <input
                                    name="dark_skin"
                                    defaultValue="false"
                                    type="radio"
                                    defaultChecked=""
                                />
                                <div className="theme-img">
                                    <img src="https://www.ramomcoder.com/saas/assets/images/theme/light.png" />
                                </div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="theme-box">
                            <label>
                                <input name="dark_skin" defaultValue="true" type="radio" />
                                <div className="theme-img">
                                    <img src="https://www.ramomcoder.com/saas/assets/images/theme/dark.png" />
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="zoomcontrol" style={{ color: "black" }}>
                Border
            </label>
            <div className="col-md-8 mb-md">
                <ul className="list-unstyled thememenu-sy">
                    <li>
                        <div className="theme-box">
                            <label>
                                <input
                                    name="border_mode"
                                    defaultValue="true"
                                    type="radio"
                                    defaultChecked=""
                                />
                                <div className="theme-img">
                                    <img src="https://www.ramomcoder.com/saas/assets/images/theme/rounded.png" />
                                </div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="theme-box">
                            <label>
                                <input name="border_mode" defaultValue="false" type="radio" />
                                <div className="theme-img">
                                    <img src="https://www.ramomcoder.com/saas/assets/images/theme/square.png" />
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
}
