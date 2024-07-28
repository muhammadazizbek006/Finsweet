import React from 'react'

const FaqPartfolio = () => {
    return (
        <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-#F4F6FC z-0'>
            <div className='containerb'>
                <p className='text-#282938 text-center text-base font-medium leading-7 mb-1'>What we created</p>
                <h1 className='text-#282938 text-xl aaa:text-3xl eee:text-5xl font-semibold leading-10 eee:leading-[64px] mb-6 text-center'>Our Work Portfolio</h1>
                <p className='text-#282938 text-xs aaa:text-sm eee:text-base font-medium leading-5 eee:leading-7 opacity-[0.7] mb-8 text-center'>We help teams create great digital products by providing them with tools and technology <br className='hidden 850px:block' /> to make the design-to-code process universally accessible.</p>
                <ul className='flex items-center space-x-7 w-full justify-center'>
                    <li>
                        <a target='_blank' href="https://ru-ru.facebook.com/login/device-based/regular/login/?login_attempt=1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g >
                                    <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z" fill="#282938" />
                                </g>
                                <defs>
                                    {/* <clipPath id="clip0_714_467">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath> */}
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://twitter.com/?lang=ru">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g>
                                    <path d="M5.87719 14.1105C11.9134 14.1105 15.2159 9.24255 15.2159 5.02241C15.2159 4.88556 15.2128 4.74567 15.2066 4.60882C15.849 4.15669 16.4034 3.59667 16.8438 2.95507C16.2454 3.21412 15.6102 3.38331 14.9597 3.45685C15.6446 3.05732 16.1574 2.42968 16.4031 1.69027C15.7588 2.06188 15.0541 2.32402 14.3194 2.46545C13.8243 1.95354 13.1697 1.61459 12.4569 1.50101C11.744 1.38744 11.0125 1.50555 10.3756 1.83711C9.73861 2.16866 9.23162 2.69517 8.93298 3.33525C8.63435 3.97533 8.5607 4.69333 8.72344 5.37822C7.41875 5.31451 6.14237 4.98468 4.97707 4.41013C3.81177 3.83557 2.78355 3.02912 1.95906 2.04304C1.54002 2.74613 1.41179 3.57811 1.60044 4.3699C1.78909 5.16169 2.28046 5.85387 2.97469 6.30576C2.4535 6.28966 1.94373 6.1531 1.4875 5.90737V5.94691C1.48703 6.68475 1.74915 7.39997 2.22929 7.97101C2.70943 8.54205 3.37797 8.93365 4.12125 9.07925C3.63845 9.2078 3.13174 9.22653 2.64031 9.13399C2.85005 9.76853 3.25813 10.3235 3.8076 10.7215C4.35706 11.1195 5.0205 11.3406 5.70531 11.354C4.5427 12.2427 3.10653 12.7248 1.62813 12.7225C1.36594 12.7221 1.10402 12.7065 0.84375 12.6757C2.34565 13.6133 4.09277 14.1114 5.87719 14.1105Z" fill="#282938" />
                                </g>
                                <defs>
                                    {/* <clipPath id="clip0_714_469">
                                        <rect width="16" height="15.5705" fill="white" transform="translate(0.84375)" />
                                    </clipPath> */}
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g >
                                    <path d="M8.6875 1.44062C10.825 1.44062 11.0781 1.45 11.9188 1.4875C12.7 1.52187 13.1219 1.65313 13.4031 1.7625C13.775 1.90625 14.0438 2.08125 14.3219 2.35938C14.6031 2.64062 14.775 2.90625 14.9188 3.27813C15.0281 3.55938 15.1594 3.98438 15.1938 4.7625C15.2313 5.60625 15.2406 5.85938 15.2406 7.99375C15.2406 10.1313 15.2313 10.3844 15.1938 11.225C15.1594 12.0063 15.0281 12.4281 14.9188 12.7094C14.775 13.0813 14.6 13.35 14.3219 13.6281C14.0406 13.9094 13.775 14.0813 13.4031 14.225C13.1219 14.3344 12.6969 14.4656 11.9188 14.5C11.075 14.5375 10.8219 14.5469 8.6875 14.5469C6.55 14.5469 6.29688 14.5375 5.45625 14.5C4.675 14.4656 4.25313 14.3344 3.97188 14.225C3.6 14.0813 3.33125 13.9063 3.05313 13.6281C2.77188 13.3469 2.6 13.0813 2.45625 12.7094C2.34688 12.4281 2.21563 12.0031 2.18125 11.225C2.14375 10.3813 2.13438 10.1281 2.13438 7.99375C2.13438 5.85625 2.14375 5.60313 2.18125 4.7625C2.21563 3.98125 2.34688 3.55938 2.45625 3.27813C2.6 2.90625 2.775 2.6375 3.05313 2.35938C3.33438 2.07812 3.6 1.90625 3.97188 1.7625C4.25313 1.65313 4.67813 1.52187 5.45625 1.4875C6.29688 1.45 6.55 1.44062 8.6875 1.44062ZM8.6875 0C6.51563 0 6.24375 0.009375 5.39063 0.046875C4.54063 0.084375 3.95625 0.221875 3.45 0.41875C2.92188 0.625 2.475 0.896875 2.03125 1.34375C1.58438 1.7875 1.3125 2.23438 1.10625 2.75938C0.909375 3.26875 0.771875 3.85 0.734375 4.7C0.696875 5.55625 0.6875 5.82812 0.6875 8C0.6875 10.1719 0.696875 10.4438 0.734375 11.2969C0.771875 12.1469 0.909375 12.7313 1.10625 13.2375C1.3125 13.7656 1.58438 14.2125 2.03125 14.6562C2.475 15.1 2.92188 15.375 3.44688 15.5781C3.95625 15.775 4.5375 15.9125 5.3875 15.95C6.24063 15.9875 6.5125 15.9969 8.68438 15.9969C10.8563 15.9969 11.1281 15.9875 11.9813 15.95C12.8313 15.9125 13.4156 15.775 13.9219 15.5781C14.4469 15.375 14.8938 15.1 15.3375 14.6562C15.7813 14.2125 16.0563 13.7656 16.2594 13.2406C16.4563 12.7313 16.5938 12.15 16.6313 11.3C16.6688 10.4469 16.6781 10.175 16.6781 8.00313C16.6781 5.83125 16.6688 5.55938 16.6313 4.70625C16.5938 3.85625 16.4563 3.27188 16.2594 2.76562C16.0625 2.23438 15.7906 1.7875 15.3438 1.34375C14.9 0.9 14.4531 0.625 13.9281 0.421875C13.4188 0.225 12.8375 0.0875 11.9875 0.05C11.1313 0.009375 10.8594 0 8.6875 0Z" fill="#282938" />
                                    <path d="M8.6875 3.89062C6.41875 3.89062 4.57812 5.73125 4.57812 8C4.57812 10.2688 6.41875 12.1094 8.6875 12.1094C10.9563 12.1094 12.7969 10.2688 12.7969 8C12.7969 5.73125 10.9563 3.89062 8.6875 3.89062ZM8.6875 10.6656C7.21563 10.6656 6.02187 9.47188 6.02187 8C6.02187 6.52813 7.21563 5.33437 8.6875 5.33437C10.1594 5.33437 11.3531 6.52813 11.3531 8C11.3531 9.47188 10.1594 10.6656 8.6875 10.6656Z" fill="#282938" />
                                    <path d="M13.9187 3.72793C13.9187 4.25918 13.4875 4.68731 12.9594 4.68731C12.4281 4.68731 12 4.25606 12 3.72793C12 3.19668 12.4313 2.76855 12.9594 2.76855C13.4875 2.76855 13.9187 3.19981 13.9187 3.72793Z" fill="#282938" />
                                </g>
                                <defs>
                                    {/* <clipPath id="clip0_714_471">
                                        <rect width="16" height="16" fill="white" transform="translate(0.6875)" />
                                    </clipPath> */}
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/company/negative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g >
                                    <path d="M15.3469 0H1.7125C1.05937 0 0.53125 0.501783 0.53125 1.12217V14.4453C0.53125 15.0656 1.05937 15.5705 1.7125 15.5705H15.3469C16 15.5705 16.5312 15.0656 16.5312 14.4483V1.12217C16.5312 0.501783 16 0 15.3469 0ZM5.27812 13.2683H2.90313V5.83588H5.27812V13.2683ZM4.09063 4.8232C3.32813 4.8232 2.7125 4.2241 2.7125 3.48511C2.7125 2.74612 3.32813 2.14702 4.09063 2.14702C4.85 2.14702 5.46562 2.74612 5.46562 3.48511C5.46562 4.22106 4.85 4.8232 4.09063 4.8232ZM14.1656 13.2683H11.7937V9.65551C11.7937 8.79488 11.7781 7.68488 10.5594 7.68488C9.325 7.68488 9.1375 8.62458 9.1375 9.59469V13.2683H6.76875V5.83588H9.04375V6.85161H9.075C9.39062 6.26772 10.1656 5.65038 11.3188 5.65038C13.7219 5.65038 14.1656 7.18918 14.1656 9.19022V13.2683Z" fill="#282938" />
                                </g>
                                <defs>
                                    {/* <clipPath id="clip0_714_476">
                                        <rect width="16" height="15.5705" fill="white" transform="translate(0.53125)" />
                                    </clipPath> */}
                                </defs>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FaqPartfolio