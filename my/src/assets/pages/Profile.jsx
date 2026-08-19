import "./Pages.css";

function Profile() {
    return (
        <div className="page">

            <div className="page-heading">
                <h1>Profile</h1>
                <p>View your personal information.</p>
            </div>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="large-avatar">
                        JP
                    </div>

                    <h2>John Palarao</h2>

                    <p className="profile-role">
                        Computer Science Student
                    </p>

                    <div className="profile-status">
                        ● Active
                    </div>

                </div>


                <div className="profile-details">

                    <div className="details-header">
                        <h2>Personal Information</h2>

                        <button className="edit-button">
                            Edit Profile
                        </button>
                    </div>

                    <div className="details-grid">

                        <div className="detail-item">
                            <span>Full Name</span>
                            <strong>John Palarao</strong>
                        </div>

                        <div className="detail-item">
                            <span>Role</span>
                            <strong>Student</strong>
                        </div>

                        <div className="detail-item">
                            <span>Course</span>
                            <strong>BS Computer Science</strong>
                        </div>

                        <div className="detail-item">
                            <span>Year Level</span>
                            <strong>2nd Year</strong>
                        </div>

                        <div className="detail-item">
                            <span>Project</span>
                            <strong>React Dashboard</strong>
                        </div>

                        <div className="detail-item">
                            <span>Status</span>
                            <strong>Active</strong>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;