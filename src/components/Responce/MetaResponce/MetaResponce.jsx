import "./MetaResponce.css";
import pencilIcons from "../../../icons/edit-pencil.svg";
import crossIcon from "../../../icons/Vector@2x.svg";
import redirect from "../../../icons/redirect.svg";
import Logo from "../../../icons/logo.svg"

const MetaResponce = (props) => {
  const Meta = props.displayData.current
  return (
    <div className="Responce_Meta">
      <div className="Responce_meta">
        <div className="Responce_meta_heading">
          <div className="heading_tittle">
            <span>Meta Informations</span>
          </div>
          <div className="heading_left">
            <div className="edit">
              <img src={pencilIcons} alt="" srcset="" />
              <span>Edit Document</span>
            </div>
            <img onClick={props.closeTab} className="Icon" src={crossIcon}></img>
          </div>
        </div>
        <div className="meta_name_tittle">
          <div className="meta_name">
            <span>Document Name</span>
            <div className="name_address">
              <span>{Meta.name}</span>
              <img src={redirect}></img>
            </div>
          </div>
          <div className="meta_tittle">
            <span>Meta Title</span>
            <span className="title_text">
             {Meta.meta_name}
            </span>
          </div>
        </div>
        <div className="meta_discription">
          <span className="discription_tittle">Meta Description</span>
          <span className="discription_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </span>
        </div>
        <div className="thumbnail">
            <span className="thumbnail_title">Thumbnail</span>
            <div className="thumbnail_img">
            <img src={Logo} alt="Asmadgiya Logo"/>

            </div>

        </div>
      </div>
    </div>
  );
};

export default MetaResponce;
