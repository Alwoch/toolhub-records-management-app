import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import leaderboardData from "./leaderboardData";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  const loadProfiles = async () => {
    await setProfileData(leaderboardData);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((each) => (
            <tr key={each.id}>
              <td>{each.id}</td>
              <td>{each.fullName}</td>
              <td>{each.username}</td>
              <td>{each.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Profile;
