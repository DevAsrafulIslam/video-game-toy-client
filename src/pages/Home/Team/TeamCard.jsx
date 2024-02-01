import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const TeamCard = ({ team }) => {
  const { id, title, image, skills } = team;
  console.log(team);
  return (
    <div className=" mx-auto px-4 py-4 border rounded-lg overflow-hidden text-center">
      <figure className=" ">
        <img className="rounded-md w-96" src={image} />
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="text-2xl"> {title}</h1>
        <p className="text-[#737373]">{skills}</p>
        <div className="flex gap-4 ">
          <FaFacebook className="text-2xl"></FaFacebook>
          <FaInstagramSquare className="text-2xl"></FaInstagramSquare>
          <FaLinkedin className="text-2xl"></FaLinkedin>
          <FaGithub className="text-2xl"></FaGithub>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
