import giticon from './../../assets/githubLogo.png';

const Footer = () => {
  return (
    <div className="bg-black w-full left-0 absolute text-white">
      <div className="w-desktop m-auto px-10 flex justify-between items-center py-10">
        <div>
          <img
            src={giticon}
            alt=""
            width={'50px'}
            className="bg-white p-2 rounded-full"
          />
        </div>
        <ul className="flex space-x-5">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">home</a>
          </li>
        </ul>
        <p>contat</p>
      </div>
    </div>
  );
};

export default Footer;
