import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="mt-[130px] text-center">
      <div className="text-center">
        <h4 className="text-[#FF3811] font-bold ">Team</h4>
        <h2 className="text-[45px]  font-serif">Meet Our Team</h2>
        <p>
          Experienced, results-oriented marketer specializing in digital
          strategy and content creation.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
