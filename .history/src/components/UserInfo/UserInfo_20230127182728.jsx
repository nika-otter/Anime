import classes from "./Error.module.scss";
const UserInfo = (props) => {
  return (
    <>
      <div className="classes.general">
        <div>
          Name: {props.displayName === null ? ". . ." : props.displayName}
        </div>
        <div>Email: {props.email === null ? ". . ." : props.email}</div>
        <div>
          Creation time:{" "}
          {props.creationTime === null ? ". . ." : props.creationTime}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
