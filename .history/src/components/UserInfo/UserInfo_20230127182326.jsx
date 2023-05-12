import classes from "./Error.module.scss";
const UserInfo = (props) => {
  return (
    <>
      <div className="classes.general">
        <div>Name: {props.anime === null ? ". . ." : props.anime}</div>
        <div>Email: {props.anime === null ? ". . ." : props.anime}</div>
      </div>
    </>
  );
};

export default UserInfo;
