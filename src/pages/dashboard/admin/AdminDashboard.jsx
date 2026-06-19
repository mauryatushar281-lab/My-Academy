import "./AdminDashboard.css";

const AdminDashboard = () => {
  const cards = [
    {
      title: "Students",
      value: "5,240",
      icon: "👨‍🎓",
    },
    {
      title: "Courses",
      value: "86",
      icon: "📚",
    },
    {
      title: "Revenue",
      value: "₹4,50,000",
      icon: "💰",
    },
    {
      title: "Teachers",
      value: "24",
      icon: "👨‍🏫",
    },
  ];

  return (
    <div className="admin">
      {/* TOP NAV */}

      <div className="topbar">
        <h2>🚀 MyAcademy</h2>

        <div className="admin-profile">
          <img src="https://i.pravatar.cc/50" />

          <span>Admin</span>
        </div>
      </div>

      <div className="main">
        <div className="header">
          <div>
            <h1>Admin Dashboard</h1>

            <p>Manage your academy performance</p>
          </div>

          <button>+ Add Course</button>
        </div>

        <div className="cards">
          {cards.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>

              <h2>{item.value}</h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="table-box">
          <div className="table-header">
            <h2>Recent Enrollments</h2>

            <input placeholder="Search..." />
          </div>

          <table>
            <thead>
              <tr>
                <th>Student</th>

                <th>Course</th>

                <th>Date</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>

                <td>React Mastery</td>

                <td>18 June</td>

                <td>
                  <span className="active">Active</span>
                </td>
              </tr>

              <tr>
                <td>Aman</td>

                <td>Physics Class 12</td>

                <td>17 June</td>

                <td>
                  <span className="active">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
