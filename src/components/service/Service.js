import './Service.css';

function Service(){
    return(
        <>
            <div className="services">
                <h1><u>My</u> Services</h1>
                <ul>
                    <li>
                        <i className="fa-solid fa-computer"></i>
                        <h2>Website Development</h2>
                        <p>
                            - 
                        </p>
                    </li>
                    <li>
                        <i className="fa-solid fa-compass-drafting"></i>
                        <h2>Software Development</h2>
                        <p>- </p>
                    </li>
                    <li>
                        <i className="fa-solid fa-database"></i>
                        <h2> Data Annotation</h2>
                        <p>
                            -Including data analysis
                        </p>
                    </li>
                    <li>
                        <i className="fa-solid fa-pen-ruler"></i>
                        <h2>Branding</h2>
                        <p>- Creating You Loyal Customers</p>
                    </li>
                    <li>
                        <i className="fa-brands fa-uikit"></i>
                        <h2>UI / UX Design</h2>
                        <p>Both Mobile and Desktop</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Service;