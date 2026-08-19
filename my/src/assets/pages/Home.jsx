import "./Pages.css";

function Home() {
    return (
        <div className="page">

            <div className="page-heading">
                <h1>Dashboard</h1>
                <p>Welcome back! Here is your React practice overview.</p>
            </div>

            <div className="dashboard-grid">

                <div className="info-card">
                    <div className="info-icon">📄</div>

                    <div>
                        <p>Total Pages</p>
                        <h2>4</h2>
                    </div>
                </div>

                <div className="info-card">
                    <div className="info-icon">🔗</div>

                    <div>
                        <p>Routes</p>
                        <h2>4</h2>
                    </div>
                </div>

                <div className="info-card">
                    <div className="info-icon">⚛</div>

                    <div>
                        <p>Framework</p>
                        <h2>React</h2>
                    </div>
                </div>

            </div>

            <div className="content-card">

                <h2>Welcome to React Dashboard</h2>

                <p>
                    This project demonstrates reusable components,
                    React Router navigation, and React State.
                </p>

                <div className="feature-list">

                    <div className="feature">
                        <span>✓</span>

                        <div>
                            <strong>React Router</strong>
                            <p>Navigate between pages without refreshing.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <span>✓</span>

                        <div>
                            <strong>Reusable Components</strong>
                            <p>Navbar, Sidebar and Footer are shared by every page.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <span>✓</span>

                        <div>
                            <strong>React State</strong>
                            <p>State can dynamically update information on the page.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;